const currentThemeSvg = document.getElementById("currentTheme");
const weatherProject = document.querySelector(".weather-project");
const weatherProject2 = document.querySelector(".weather-project-2");
const weatherProject3 = document.querySelector(".weather-project-3");
let username;
let usernameInput;
const form = document.getElementById("profileForm");

function getCurrentIndex(collection) {
    return collection.findIndex(slide => slide.classList.contains("displaySlide")) || 0;
}
    // MAIN SLIDER BUTTON 
    const slides = Array.from(document.querySelectorAll(".full-weather-container"));

    const r_buttons1 = document.getElementById("w-arrow1");
    const l_buttons1 = document.getElementById("w-arrow2");
    const collections1 = [slides];
    const indices1 = collections1.map(() => 0);

    collections1.forEach((col) => {
        if (col.length > 0) col[0].classList.add("displaySlide");
    });

function weatherScroll(collection, i, dir) {
    if (collection.length === 0) return;

    indices1[i] = getCurrentIndex(collection);

    collection[indices1[i]].classList.remove("displaySlide");

    indices1[i] =
        dir === "right"
            ? (indices1[i] + 1) % collection.length
            : (indices1[i] - 1 + collection.length) % collection.length;

    const curr = collection[indices1[i]];

    curr.classList.remove("slideIn", "slideInB", "reverseSlideIn");
    void curr.offsetWidth;

    if (collection === slides) {
        if (dir === "right") {
            curr.classList.add("slideInB");
            setTimeout(() => {
                curr.classList.remove("slideInB")
            }, 800);
        } else {
            curr.classList.add("reverseSlideIn");
            setTimeout(() => {
                curr.classList.remove("reverseSlideIn")
            }, 800);
        }
    }

    curr.classList.add("displaySlide");
}

r_buttons1?.addEventListener("click", () => {
    collections1.forEach((col, i) => weatherScroll(col, i, "right"));
});

l_buttons1?.addEventListener("click", () => {
    collections1.forEach((col, i) => weatherScroll(col, i, "left"));
});

function changeModeToDays() {
    if(weatherProject && weatherProject2) {
        weatherProject2.classList.remove("block")
        weatherProject.classList.remove("grid")
        weatherProject.classList.add("hidden")
        weatherProject2.classList.add("hidden")
        weatherProject3.classList.add("flex")
        localStorage.setItem("Mode", "Days")
    }
}

function changeModeToAdvanced() {
    if(weatherProject && weatherProject2) {
        weatherProject.classList.remove("grid")
        weatherProject2.classList.remove("hidden")
        weatherProject3.classList.remove("flex")
        weatherProject.classList.add("hidden")
        weatherProject2.classList.add("block")
        localStorage.setItem("Mode", "Advanced")
    }
}

function changeModeToEasy() {
    if(weatherProject && weatherProject2) {
        weatherProject2.classList.remove("block")
        weatherProject.classList.remove("grid")
        weatherProject3.classList.remove("flex")
        weatherProject2.classList.add("hidden")
        weatherProject.classList.add("grid")
        localStorage.setItem("Mode", "Easy")
    }
}

function getMode() {
    const mode = localStorage.getItem("Mode");
    if(mode === "Advanced") {
        changeModeToAdvanced();
    }
    else if(mode === "Days") {
        changeModeToDays();
    }
    else {
        changeModeToEasy();
    }
}

function changeThemeColorRgb() {
    const selectorUl = document.querySelector(".custom-selector > ul");
    const selectorLi = document.querySelectorAll(".custom-selector > ul > li");
    const selectorSvg = document.querySelector(".custom-selector > svg");
    selectorUl.classList.toggle("ul-height")
    selectorLi.forEach(li => {
        li.classList.toggle("block")
    });
    selectorSvg.classList.toggle("rotate-svg")
}

function changeThemeSvg(e) {
    const lightTheme = e.target.closest(".light-theme-span");
    const darkTheme = e.target.closest(".dark-theme-span");
    const blackOrangeTheme = e.target.closest(".black-orange-theme-span");

    if (lightTheme) {
        currentThemeSvg.className = "light-theme-span";
        document.body.className = "light-theme";
        localStorage.setItem("currentTheme", "lightTheme")
        localStorage.setItem("currentThemeSvg", "lightThemeSvg")
    } 
    else if (darkTheme) {
        currentThemeSvg.className = "dark-theme-span";
        document.body.className = "dark-theme";
        localStorage.setItem("currentTheme", "darkTheme")
        localStorage.setItem("currentThemeSvg", "darkThemeSvg")
    } 
    else if (blackOrangeTheme) {
        currentThemeSvg.className = "black-orange-theme-span";
        document.body.className = "black-orange-theme";
        localStorage.setItem("currentTheme", "blackOrangeTheme")
        localStorage.setItem("currentThemeSvg", "blackOrangeThemeSvg")
    }
}

function loadTheme() {
    const currentTheme = localStorage.getItem("currentTheme")
    if(currentTheme === "darkTheme") {
        currentThemeSvg.className = "dark-theme-span";
        document.body.className = "dark-theme";
    }
    else if (currentTheme === "blackOrangeTheme") {
        currentThemeSvg.className = "black-orange-theme-span";
        document.body.className = "black-orange-theme";
    }
    else {
        currentThemeSvg.className = "light-theme-span";
        document.body.className = "light-theme";
    }
}

function getUsername() {
    let username = localStorage.getItem("username") || "";
    if(username.length > 0) {
        form.innerHTML = `<h2 class="profile-username">${username}</h2>`
    }
}

function createUsernameInput() {
    username = localStorage.getItem("username");
    form.innerHTML = `<input class="profile-username-input" placeholder="Type your username here" type="text">`
    usernameInput = document.querySelector(".profile-username-input");
    usernameInput.value = username;
    usernameInput.focus();
    username = "";
}

const scrollContainers = document.querySelectorAll('[class*="-8days-weather-container-inner"]');

let isSyncing = false;

const sync = (e) => {
    if (isSyncing) return;
    
    isSyncing = true;
    const source = e.currentTarget;

    scrollContainers.forEach((target) => {
        if (target !== source) {
            // Используем Full Tab (4 пробела) для вложенности
            target.scrollLeft = source.scrollLeft;
            target.scrollTop = source.scrollTop;
        }
    });

    // Сбрасываем флаг в конце очереди событий
    setTimeout(() => {
        isSyncing = false;
    }, 0);
};

scrollContainers.forEach((container) => {
    container.addEventListener('scroll', sync, { passive: true });
});

document.addEventListener("DOMContentLoaded", ()=> {
    loadTheme();
    getMode();
    if(form) {
        getUsername();
    }
    
    document.getElementById("easy-mode-button")?.addEventListener("click", changeModeToEasy);
    document.getElementById("advanced-mode-button")?.addEventListener("click", changeModeToAdvanced);
    document.getElementById("days-mode-button")?.addEventListener("click", changeModeToDays);


    form?.addEventListener("submit", (e)=> {
    usernameInput = document.querySelector(".profile-username-input");
    if(usernameInput) {
        e.preventDefault();
        username = usernameInput.value.trim();
        localStorage.setItem("username", username)
        if(usernameInput.value.length > 0) {
            form.innerHTML = `<h2 class="profile-username">${username}</h2>`
        }
    }
    else {
        createUsernameInput();
    }
    })
    form?.addEventListener("click", (e)=> {
        createUsernameInput();
    })
    document.addEventListener("click", (e)=> {
        const clickOnSelector = document.querySelector(".custom-selector").contains(e.target);
        if (clickOnSelector) {
            changeThemeColorRgb();
        }
        else {
            const selectorUl = document.querySelector(".custom-selector > ul");
            const selectorLi = document.querySelectorAll(".custom-selector > ul > li");
            const selectorSvg = document.querySelector(".custom-selector > svg");
            selectorUl.classList.remove("ul-height")
            selectorLi.forEach(li => {
                li.classList.remove("block")
            });
            selectorSvg.classList.remove("rotate-svg")
        }
    })
    document.addEventListener("click", (e) => {
        changeThemeSvg(e);
    });
})