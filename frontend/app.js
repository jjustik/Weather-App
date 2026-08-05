const currentThemeSvg = document.getElementById("currentTheme");
const weatherProject = document.querySelector(".weather-project");
const weatherProject2 = document.querySelector(".weather-project-2");
const avatarInput = document.getElementById("avatarInput");
const avatarImg = document.querySelector(".profile-img")
const avatarDeleteBtn = document.querySelector(".custom-avatar-remover")
const profileLiAvatar = document.querySelector(".mini-profile-image")
const profileMenuAvatar = document.querySelector(".middle-profile-image")
const usernameInput = document.querySelector(".profile-username-input");
const saveBtn = document.querySelector(".save-btn")
const signupButtonChangeMode = document.querySelector("#signupButton")
const signinButtonChangeMode = document.querySelector("#signinButton")
const signUpUserInput = document.querySelector("#signup-user")
const signUpPassInput = document.querySelector("#signup-pass")
const loginUserInput = document.querySelector("#login-user")
const loginPassInput = document.querySelector("#login-pass")
const signUpBtn = document.querySelector("#signup-button")
const signInBtn = document.querySelector("#signin-button")
const searchBtn = document.querySelector(".search-button")
const searchBar = document.querySelector(".search-bar")
const profileMenu = document.querySelector(".profile-menu")
const profileImgLi = document.querySelector(".profile-img-li")
const themeChangeBlock = document.querySelector(".theme-change-block")
const weatherBackground = document.querySelector(".weather-background")
const settingsBtns = document.querySelectorAll(".settings-button")
const settingsBtn1 = document.querySelector(".set-btn-1")
const mobileAdvancedBar = document.querySelector(".mobile-advanced-bar")
const settingsIcons = document.querySelectorAll(".settings-icon")
const actionBar1 = document.querySelector("#actionBar1")
const actionBar2 = document.querySelector("#actionBar2")
const footer = document.querySelector("footer")
const passLengthReqP = document.querySelector("#req8char");
const passNumAndLettersReqP = document.querySelector("#lettersandnumbersreq");
const signupEmptyUserError = document.querySelector("#signup-empty-email-error-message")
const signupServerError = document.querySelector("#signup-server-error-message")
const signupUsernameTakenError = document.querySelector("#signup-error-message")
const loginEmptyFieldsError = document.querySelector("#login-empty-fields-error-message")
const loginServerError = document.querySelector("#login-server-error-message")
const loginInvalidCredentialsError = document.querySelector("#login-error-message")
const saveProfileRequirementsError = document.querySelector(".login-requirement")
const profileServerError = document.querySelector(".profile-server-error")
const invalidEmailError = document.querySelector("#invalid-email-error-message")
const passResetEmptyFieldsError = document.querySelector("#pass-reset-empty-fields-error-message")
const passDontMatchError = document.querySelector("#passwords-dont-match-error-message")
const passResetServerError = document.querySelector("#pass-reset-server-error-message")
const loginVisibilitybtn = document.querySelector("#login-pass-visibility-btn")
const signupVisibilitybtn = document.querySelector("#signup-pass-visibility-btn")
const authErrors = document.querySelectorAll(".auth-error-message")
const logoutBtns = document.querySelectorAll(".logout-button")
const authTrack = document.querySelector(".auth-slider-track")
const forgotPassbtn = document.querySelector(".forgot-password-btn")
const backToLoginBtn = document.querySelector(".forgot-pass-back-to-login-btn")
const checkmarkVideo = document.querySelector('#checkMarkVideo');
const regForm = document.querySelector('.reg-form')
const loginForm = document.querySelector('.login-form')
const forgotPassForm = document.querySelector('.forgot-pass-form')
const resetPassForm = document.querySelector('.reset-pass-form')
const isMobile = window.matchMedia("(max-width: 470px)");
const isTablet = window.matchMedia("(max-width: 810px)");
let username;
let currentUsername;
let editingUsername = false;
let shortInput = false;
let searchBtnActive = false;
let passLengthReq = false;
let passNumAndLettersReq = false;
let isLogin = false;
let isLoggedIn = false;
let authCities = null;
let avatarUrl = null;
let defaultAvatar = true;
const form = document.getElementById("profileForm");

//------BACKEND--------
const BASE_URL = "http://localhost:8000";
// const BASE_URL = "https://weather-app-production-d28f.up.railway.app";

function changeModeToAdvanced() {
    if(weatherProject && weatherProject2) {
        weatherProject.classList.remove("grid")
        weatherProject2.classList.remove("hidden")
        // weatherBackground.classList.remove("easy-mode")
        // weatherBackground.classList.add("height-expansion", "advanced-mode")
        weatherBackground.classList.add("height-expansion")
        weatherBackground.classList.remove("padding-bottom")
        weatherProject.classList.add("hidden")
        weatherProject2.classList.add("grid")
        footer.classList.add("margin-top")
        actionBar1.classList.add("hidden")
        actionBar2.classList.add("hidden")
        mobileAdvancedBar.classList.remove("hidden")
        settingsBtn1.classList.remove("flex")
        localStorage.setItem("Mode", "Advanced")
    }
}

function changeModeToEasy() {
    if(weatherProject && weatherProject2) {
        weatherProject2.classList.remove("grid")
        weatherProject.classList.remove("grid")
        weatherProject.classList.remove("hidden")
        weatherBackground.classList.remove("height-expansion")
        weatherBackground.classList.add("padding-bottom")
        // weatherBackground.classList.remove("height-expansion", "advanced-mode")
        // weatherBackground.classList.add("easy-mode")
        weatherProject2.classList.add("hidden")
        weatherProject.classList.add("grid")
        footer.classList.remove("margin-top")
        actionBar1.classList.add("hidden")
        actionBar2.classList.add("hidden")
        mobileAdvancedBar.classList.add("hidden")
        settingsBtn1.classList.add("flex")
        localStorage.setItem("Mode", "Easy")
    }
}

function getMode() {
    const mode = localStorage.getItem("Mode");
    if(mode === "Advanced") {
        changeModeToAdvanced();
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
        document.documentElement.className = "light-theme";
        if(defaultAvatar) {
            if(avatarImg) {
                avatarImg.src = "images/avatars/default-avatar-lightmode.jpg"
            }
            profileLiAvatar.src = "images/avatars/default-avatar-lightmode.jpg"
            profileMenuAvatar.src = "images/avatars/default-avatar-lightmode.jpg"
        }
        localStorage.setItem("currentTheme", "lightTheme")
        localStorage.setItem("currentThemeSvg", "lightThemeSvg")
    } 
    else if (darkTheme) {
        currentThemeSvg.className = "dark-theme-span";
        document.documentElement.className = "dark-theme";
        if(defaultAvatar) {
            if(avatarImg) {
                avatarImg.src = "images/avatars/default-avatar-darkmode.jpg"
            }
            profileLiAvatar.src = "images/avatars/default-avatar-darkmode.jpg"
            profileMenuAvatar.src = "images/avatars/default-avatar-darkmode.jpg"
        }
        localStorage.setItem("currentTheme", "darkTheme")
        localStorage.setItem("currentThemeSvg", "darkThemeSvg")
    } 
    else if (blackOrangeTheme) {
        currentThemeSvg.className = "black-orange-theme-span";
        document.documentElement.className = "black-orange-theme";
        if(defaultAvatar) {
            if(avatarImg) {
                avatarImg.src = "images/avatars/default-avatar-lightmode.jpg"
            }
            profileLiAvatar.src = "images/avatars/default-avatar-lightmode.jpg"
            profileMenuAvatar.src = "images/avatars/default-avatar-lightmode.jpg"
        }
        localStorage.setItem("currentTheme", "blackOrangeTheme")
        localStorage.setItem("currentThemeSvg", "blackOrangeThemeSvg")
    }
}

function loadTheme() {
    const currentTheme = localStorage.getItem("currentTheme")
    if(currentTheme === "darkTheme") {
        currentThemeSvg.className = "dark-theme-span";
        document.documentElement.className = "dark-theme";
        if(defaultAvatar) {
            if(avatarImg) {
                avatarImg.src = "images/avatars/default-avatar-darkmode.jpg"
            }
            profileLiAvatar.src = "images/avatars/default-avatar-darkmode.jpg"
            profileMenuAvatar.src = "images/avatars/default-avatar-darkmode.jpg"
        }
    }
    else if (currentTheme === "blackOrangeTheme") {
        currentThemeSvg.className = "black-orange-theme-span";
        document.documentElement.className = "black-orange-theme";
        if(defaultAvatar) {
            if(avatarImg) {
                avatarImg.src = "images/avatars/default-avatar-lightmode.jpg"
            }
            profileLiAvatar.src = "images/avatars/default-avatar-lightmode.jpg"
            profileMenuAvatar.src = "images/avatars/default-avatar-lightmode.jpg"
        }
    }
    else {
        currentThemeSvg.className = "light-theme-span";
        document.documentElement.className = "light-theme";
        if(defaultAvatar) {
            if(avatarImg) {
                avatarImg.src = "images/avatars/default-avatar-lightmode.jpg"
            }
            profileLiAvatar.src = "images/avatars/default-avatar-lightmode.jpg"
            profileMenuAvatar.src = "images/avatars/default-avatar-lightmode.jpg"
        }
    }
}

function setWidthForUsernameInput(flag = false) {
    let username = localStorage.getItem("username") || "";
    let usernameInputWidth = username.length * 16;
    document.documentElement.style.setProperty("--start-input-width", `${usernameInputWidth}px`)
}

function createUsernameInput() {
    username = localStorage.getItem("username") || "";
    setWidthForUsernameInput(true);
    form.innerHTML = `<input class="profile-username-input" placeholder="Type your username here" type="text">
                        <span class="error-message">The username is too long</span>`
    const usernameInput = document.querySelector(".profile-username-input");
    setTimeout(() => {
        usernameInput.classList.add("final-input-width");
    }, 10);
    usernameInput.value = username;
    if(!isTablet.matches) {
        usernameInput.focus();
    }
    username = "";
    addErrorMessageListener();
    editingUsername = true;
}

function addErrorMessageListener() {
    const usernameInput = document.querySelector(".profile-username-input")
    const errorMessage = document.querySelector(".error-message")
    const maxLength = 13;
    usernameInput?.addEventListener("input", ()=> {
        if(usernameInput.value.length > maxLength) {
            errorMessage.classList.add("block")
        } else {
            errorMessage.classList.remove("block")
        }
    })

}

function submitProfileChanges(e, animation = false, save = true) {
    if(!isLoggedIn) {
        showProfileError(saveProfileRequirementsError)
        return;
    }
    const usernameInput = document.querySelector(".profile-username-input");
    if(!usernameInput) {
        return;
    }
    if(save) {
        username = usernameInput.value.trim();
    } else {
        username = localStorage.getItem("username");
    }
    saveUsername(username)
    saveUsernameLocal()
    const hasValue = usernameInput.value.length > 0;
    if(hasValue) {
        setWidthForUsernameInput();
        usernameInput.classList.remove("final-input-width")
        usernameInput.classList.add("reverse-input-animation", "hide-caret")
    }
    const finishSubmit = () => {
        if(hasValue) {
            form.innerHTML = `<h2 class="profile-username">${username}</h2>`
        }
        editingUsername = false;
    }
    if(animation) {
        setTimeout(finishSubmit, 250)
    }
    else {
        finishSubmit();
    }
}

function authModeChange(mode, button) {
    const authInputs = button.closest(".auth-box").querySelectorAll(".input-field")
    const passVisibilityBtns = document.querySelectorAll(".pass-visibility-btn")
    button.closest(".auth-wrapper").classList.remove("flex");
    button.closest(".auth-box").classList.add("auth-animation")
    button.closest(".auth-box").querySelector(".pass-visibility-btn").classList.remove('is-visible')
    button.closest(".auth-box").querySelector(".pass-input-box").querySelector(".input-field").type = 'password';
    const targetErrorElements = document.querySelectorAll('.target-error-element').forEach(el => el.classList.remove('error-active-input-box', 'error-active-btn'))
    authInputs.forEach(input => input.value = "")
    authErrors.forEach(err => err.classList.remove("block"))
    passVisibilityBtns.forEach(btn => btn.classList.remove("flex"))
    passLengthReqP.classList.remove("checked", "not-checked")
    passNumAndLettersReqP.classList.remove("checked", "not-checked")
    if(mode === "login") {
        document.querySelector("#login-wrapper").classList.add("flex")
    } else {
        document.querySelector("#signup-wrapper").classList.add("flex")
    }
}

function profileMenuToggle() {
    profileImgLi.addEventListener("click", (e)=> {
        profileMenu.classList.toggle("hidden");
        e.stopPropagation()
    })
}

function hideProfileMenu() {
    profileMenu.classList.add("hidden");
}

function toggleBtnAnimation() {
    searchBar.classList.toggle("active")
    if(!isTablet.matches) {
        if(searchBar.classList.contains("active")) {
            searchInput.focus();
        } else {
            searchInput.blur();
        }
    }
    const clearInput = () => {
        searchInput.value = "";
        if(addingBlockFromSearch && !searchingWeatherBlocksCleared) {
            if(addButton) {
                renderAddButton1();
            }
            deleteNewWeatherBlock();
            correctAddButtonsPosition()
            renderSliderButtons();
        }
        searchBar.removeEventListener("transitionend", clearInput)
        searchBar.removeEventListener("transitioncancel", clearInput)
    }
    searchBar.addEventListener("transitioncancel", clearInput)
    searchBar.addEventListener("transitionend", clearInput)
    searchBtnActive ? false : true;
}

searchBtn?.addEventListener("click", ()=> {
    if(!searchBtnActive) {
        toggleBtnAnimation();
    }
})

function settingsBtnScreenSizeCheck(e) {
    const mode = localStorage.getItem("Mode");
    if(mode === "Advanced" && e.matches) {
        actionBar2.classList.toggle("hidden")
    } else {
        actionBar1.classList.toggle("hidden")
    }
}

settingsBtns.forEach(el => {
    el?.addEventListener("click", function() {
        settingsIcons.forEach(el => el.classList.toggle("active"))
        settingsBtnScreenSizeCheck(isMobile)
    })
})

function setDefaultAvatar(deletion = false) {
    const currentTheme = localStorage.getItem("currentTheme")
    if(currentTheme === "darkTheme") {
        if(avatarImg) {
            avatarImg.src = "images/avatars/default-avatar-darkmode.jpg";
        }
        if(!deletion) {
            profileMenuAvatar.src = "images/avatars/default-avatar-darkmode.jpg";
            profileLiAvatar.src = "images/avatars/default-avatar-darkmode.jpg";
        }
    } else if(currentTheme === "lightTheme") {
        if(avatarImg) {
            avatarImg.src = "images/avatars/default-avatar-lightmode.jpg";
        }
        if(!deletion) {
            profileMenuAvatar.src = "images/avatars/default-avatar-lightmode.jpg";
            profileLiAvatar.src = "images/avatars/default-avatar-lightmode.jpg";
        }
    } else if(currentTheme === "blackOrangeTheme") {
        if(avatarImg) {
            avatarImg.src = "images/avatars/default-avatar-lightmode.jpg";
        }
        if(!deletion) {
            profileMenuAvatar.src = "images/avatars/default-avatar-lightmode.jpg";
            profileLiAvatar.src = "images/avatars/default-avatar-lightmode.jpg";
        }
    }
}

forgotPassbtn?.addEventListener('click', ()=> {
    authTrack.classList.add('show-forgot');
})

backToLoginBtn?.addEventListener('click', ()=> {
    authTrack.classList.remove('show-forgot')
})

function setEmailLink(email) {
    const forgotPassCheckEmailLink = document.querySelector('.forgot-pass-check-email-link')
    const emailIconLink = document.querySelector('.email-icon-link')
    const mailProviders = {
        // Google
        'gmail.com': 'https://mail.google.com',
        'googlemail.com': 'https://mail.google.com',

        // Yandex
        'yandex.ru': 'https://mail.yandex.ru',
        'yandex.com': 'https://mail.yandex.com',
        'yandex.by': 'https://mail.yandex.by',
        'yandex.kz': 'https://mail.yandex.kz',
        'ya.ru': 'https://mail.yandex.ru',

        // VK / Mail.ru
        'mail.ru': 'https://e.mail.ru',
        'inbox.ru': 'https://e.mail.ru',
        'bk.ru': 'https://e.mail.ru',
        'list.ru': 'https://e.mail.ru',
        'internet.ru': 'https://e.mail.ru',

        // Rambler
        'rambler.ru': 'https://mail.rambler.ru',
        'lenta.ru': 'https://mail.rambler.ru',
        'autorambler.ru': 'https://mail.rambler.ru',
        'myrambler.ru': 'https://mail.rambler.ru',
        'ro.ru': 'https://mail.rambler.ru',

        // Microsoft / Outlook
        'outlook.com': 'https://outlook.live.com',
        'hotmail.com': 'https://outlook.live.com',
        'live.com': 'https://outlook.live.com',
        'msn.com': 'https://outlook.live.com',

        // Apple
        'icloud.com': 'https://www.icloud.com/mail',
        'me.com': 'https://www.icloud.com/mail',
        'mac.com': 'https://www.icloud.com/mail',

        // Yahoo & AOL
        'yahoo.com': 'https://mail.yahoo.com',
        'myyahoo.com': 'https://mail.yahoo.com',
        'aol.com': 'https://mail.aol.com',

        // Proton Mail
        'proton.me': 'https://mail.proton.me',
        'protonmail.com': 'https://mail.proton.me',
        'pm.me': 'https://mail.proton.me',

        // Другие
        'zoho.com': 'https://mail.zoho.com',
        'ukr.net': 'https://mail.ukr.net',
        'gmx.com': 'https://www.gmx.com',
        'gmx.de': 'https://www.gmx.de',
        'web.de': 'https://web.de'
    };
    if (!email || !email.includes('@')) return;
    const domain = email.split('@')[1].toLowerCase()
    if(mailProviders[domain]) {
        forgotPassCheckEmailLink.href = mailProviders[domain];
        emailIconLink.href = mailProviders[domain];
    } else {
        forgotPassCheckEmailLink.classList.add('inactive-email-link')
        forgotPassCheckEmailLink.removeAttribute('href')
    }
}

function showForgotPassEmailCheckSlide() {
    const forgotPassSlide = document.querySelector(".forgot-pass-slide")
    const forgotPassEmailCheckSlide = document.querySelector('.forgot-pass-check-email-block')
    forgotPassSlide.classList.add("hidden")
    forgotPassEmailCheckSlide.classList.remove("hidden")
}

function showResetPassSuccessSlide() {
    const resetPassSlide = document.querySelector('.reset-pass-slide')
    const resetPassSuccessSlide = document.querySelector('.reset-pass-success-block')
    resetPassSlide.classList.add('hidden')
    resetPassSuccessSlide.classList.remove('hidden')
}

function showError(form, error) {
    error.classList.add("block")
    const targetErrorElements = form.querySelectorAll('.target-error-element');
    let targetErrorElement = error.classList.contains("first-target-element-error") ? targetErrorElements[0] : targetErrorElements[1]
    targetErrorElement.classList.contains('input-box') ? targetErrorElement.classList.add('error-active-input-box') : targetErrorElement.classList.add('error-active-btn');
}

function hideErrors() {
    const errors = document.querySelectorAll('.aith-error')
    const InputBoxes = document.querySelectorAll('.input-box');
    errors.forEach(err => {
        err.classList.remove("block")
    })
    InputBoxes.forEach(el => {
        el.classList.remove('error-active-input-box', 'error-active-btn')
    })
}

function showProfileError(error) {
    error.classList.add("block")
    const targetErrorElement = document.querySelector('.target-profile-error-element');
    targetErrorElement.classList.add('error-active-input-box');
}

function hideProfileErrors() {
    const errors = document.querySelectorAll('.profile-error-message')
    const targetElement = document.querySelector('.target-profile-error-element');
    errors.forEach(err => {
        err.classList.remove("block")
    })
    targetElement.classList.remove('error-active-input-box', 'error-active-btn')
}

// ---------------FRONTEND TO BACKEND---------------------
async function apiFetch(url, options = {}) {
    try {
        const res = await fetch(url, options)
        if(res.status === 401) {
            const refreshed = await refreshCookie();
            if(refreshed) {
                return await apiFetch(url, options)
            } else {
                updateAuthUI(false)
                throw new Error('Session expired')
            }
        }
        return res;
    } catch(err) {
        console.error(`Network error: ${err.message}`)
        throw err;
    }
}

async function registration() {
    const login = signUpUserInput.value.trim();
    const password = signUpPassInput.value.trim();
    hideErrors();
    if(login.length === 0) {
        showError(regForm, signupEmptyUserError)
        return;
    } else {
        hideErrors();
    }
    if(!passLengthReq || !passNumAndLettersReq) {
        if(!passLengthReq) {
            passLengthReqP.classList.add("not-checked")
        }
        if(!passNumAndLettersReq) {
            passNumAndLettersReqP.classList.add("not-checked")
        }
        return;
    };
    try {
        const res = await fetch(`${BASE_URL}/registration`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_email: login, password: password })
        });
        if(!res.ok) {
            const msg = Array.isArray(data?.detail) ? data.detail[0].msg : (data?.detail || 'Error')
            const error = new Error(msg)
            error.status = res.status;
            throw error;
        }
        const data = await res.json();
        console.log(data)
        await loginUser(login, password)
    }
    catch(err) {
        if(!err.status) {
            showError(regForm, signupServerError)
        } else if(err.message === "User with this email or nickname already exists") {
            showError(regForm, signupUsernameTakenError)
        } else if(err.status === 422) {
            signupServerError.textContent = err.message;
            showError(regForm, signupServerError)
        } else {
            signupServerError.textContent = "Something went wrong. Please try again.";
            showError(regForm, signupServerError)
        }
    }
}

async function login() {
    const username = loginUserInput.value.trim();
    const password = loginPassInput.value.trim();
    hideErrors();
    if(!username || !password) {
        showError(loginForm, loginEmptyFieldsError)
        return;
    } else {
        hideErrors()
    }
    try {
        isLogin = true;
        await loginUser(username, password)
    }
    catch(err) {
        if(!err.status) {
            showError(loginForm, loginServerError)
        } else if(err.message === "Invalid credentials provided.") {
            showError(loginForm, loginInvalidCredentialsError)
        } else if(err.status === 422) {
            loginServerError.textContent = err.message;
            showError(loginForm, loginServerError)
        } else {
            loginServerError.textContent = "Something went wrong. Please try again.";
            showError(loginForm, loginServerError)
        }
    }
}

async function loginUser(usernameValue, passwordValue) {
    const formData = new URLSearchParams();
    formData.append('grant_type', 'password');
    formData.append('username', usernameValue);
    formData.append('password', passwordValue);
    const res = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        credentials: 'include',
        body: formData
    })
    const data = await res.json();
    if(!res.ok) {
        const msg = Array.isArray(data?.detail) ? data.detail[0].msg : (data?.detail || 'Error')
        const error = new Error(msg)
        error.status = res.status;
        throw error;
    }
    authToast()
    setTimeout(() => {
        window.location.replace("/index.html")
    }, 1500);
}

async function logout() {
    try {
        const res = await apiFetch(`${BASE_URL}/logout`, {
            method: 'PUT',
            credentials: 'include'
        })
        if(!res.ok) {
            throw new Error(res.status)
        }
        window.location.replace("/index.html")
    } catch(err) {
        console.error(`Can't logout ${err}`)
    }
}

function passCheck() {
    const password = signUpPassInput.value;
    const hasLetters = /[a-zA-Z]/.test(password)
    const hasNumbers = /[0-9]/.test(password)
    passLengthReqP.classList.remove("not-checked")
    passNumAndLettersReqP.classList.remove("not-checked")
    passLengthReqP.classList.toggle("checked", password.length >= 8)
    password.length >= 8 ? passLengthReq = true : passLengthReq = false;
    passNumAndLettersReqP.classList.toggle("checked", hasLetters && hasNumbers)
    hasLetters && hasNumbers ? passNumAndLettersReq = true : passNumAndLettersReq = false;
}

function authToast() {
    const toastContainer = document.querySelector(".toast-container")
    const toastText = document.querySelector(".toast-text")
    if(isLogin) {
        toastText.textContent = "Welcome back!"
    }
    toastContainer.classList.add("flex")
}

function passVisibilityBtn(input) {
    const visibilityBtn = input.parentElement.querySelector(".pass-visibility-btn")
    if(input.value.length > 0) {
        visibilityBtn.classList.add("flex")
    } else {
        visibilityBtn.classList.remove("flex")
    }
}

function updateAuthUI(isLoggedIn) {
    const loginLi = document.querySelector(".login-li")

    loginLi?.classList.toggle("hidden", isLoggedIn)
    profileImgLi.classList.toggle("block", isLoggedIn)
}

async function checkAuth() {
    try {
        const res = await apiFetch(`${BASE_URL}/users/me`, {
            method: 'GET',
            credentials: 'include'
        })
        if(!res.ok) {
            // if(res.status === 401) {
            //     const refreshed = await refreshCookie();
            //     if(refreshed) {
            //         return await checkAuth();
            //     }
            //     updateAuthUI(false);
            //     throw new Error('Refresh token expired or invalid')
            // } else {
            // }
            updateAuthUI(false);
            // if(form) {
            //     getLocalUsername();
            // }
            return;
        }
        const userData = await res.json();
        console.log('Данные залогиненного пользователя:', userData);
        isLoggedIn = true;
        Cities = userData.cities;
        loadProfileMenu(userData)
        getAvatar(userData)
        if(form) {
            getUsername(userData)
        }
        updateAuthUI(true)
    } catch (err) {
        console.error('Network error during authorization check', err.message)
        updateAuthUI(false)
        // if(form) {
        //     getLocalUsername();
        // }
    }
}

async function refreshCookie() {
    try {
        const res = await fetch(`${BASE_URL}/refresh`, {
            method: 'POST',
            credentials: 'include'
        })
        if(!res.ok) {
            throw new Error(res.status)
        }
        console.log("cookie refreshed")
        return true;
    } catch(err) {
        console.error(`Can't refresh cookie ${err}`)
        return false;
    }
}

function loadProfileMenu(data) {
    const profileMenuUsername = document.querySelector(".profile-menu-username")
    const profileMenuEmail = document.querySelector(".profile-menu-email")
    const setUsernameA = document.querySelector(".set-username-a")
    const setEmailA = document.querySelector(".set-email-a")
    profileMenuUsername.textContent = data.name;
    if(data.name === null) {
        profileMenuUsername.classList.add("hidden")
        setUsernameA.classList.add("block")
    } else {
        profileMenuUsername.textContent = data.name;
    }
    if(data.email === null) {
        profileMenuEmail.classList.add("hidden")
        setEmailA.classList.add("block")
    } else {
        profileMenuEmail.textContent = data.email
    }
    profileMenuAvatar.url = data.avatar_url
}

function passVisibility(input, visBtn) {
    const passHidden = input.type === 'password';
    input.type = passHidden ? 'text' : 'password';
    visBtn.classList.toggle('is-visible', passHidden)
}

loginVisibilitybtn?.addEventListener("click", function() {
    passVisibility(loginPassInput, this)
})

signupVisibilitybtn?.addEventListener("click", function() {
    passVisibility(signUpPassInput, this)
})

function getUsername(data) {
    if(data.name !== null) {
        let username = data.name;
        form.innerHTML = `<h2 class="profile-username">${username}</h2>`
    }
    currentUsername = data.name || '';
}

function setProfileUsername(username) {
    if(username === '') username = null;
    const profileMenuUsername = document.querySelector(".profile-menu-username")
    const setUsernameA = document.querySelector(".set-username-a")
    setUsernameA.classList.toggle("block", username === null)
    profileMenuUsername.classList.toggle("hidden", username === null)
    if(username === null) {
        profileMenuUsername.textContent = "";
    } else {
        profileMenuUsername.textContent = username;
    }
}

async function saveUsername(username = null) {
    if(username === currentUsername) {
        setProfileUsername(username)
        return;
    }
    hideProfileErrors();
    const query = username ? `?name=${encodeURIComponent(username)}` : '';
    try {
        const res = await apiFetch(`${BASE_URL}/users/me/name${query}`, {
            method: 'PUT',
            credentials: 'include'
        })
        if(!res.ok) {
            // saveUsernameLocal()
            const msg = Array.isArray(data?.detail) ? data.detail[0].msg : (data?.detail || 'Error')
            const error = new Error(msg)
            error.status = res.status;
            throw error;
        }
        const data = await res.json();
        console.log(data)
        setProfileUsername(username)
    } catch(err) {
        // saveUsernameLocal()
        if(!err.status) {
            showProfileError(profileServerError)
        } else if(err.status === 400) {
            profileServerError.textContent = err.message;
            showProfileError(profileServerError)
        } else if(err.status === 422) {
            profileServerError.textContent = err.message;
            showProfileError(profileServerError)
        } else {
            profileServerError.textContent = "Something went wrong. Please try again.";
            showProfileError(profileServerError)
        }
    }
}

function saveUsernameLocal() {
    localStorage.setItem("username", username)
}

function getLocalUsername() {
    let username = localStorage.getItem("username") || "";
    if(username.length > 0) {
        form.innerHTML = `<h2 class="profile-username">${username}</h2>`
    }
}

async function saveAvatar() {
    const file = avatarInput.files[0];
    try {
        let res;
        if(!defaultAvatar && file) {
            const formData = new FormData();
            const ext = file.name.split('.').pop() || 'jpg';
            formData.append('avatar', file, `avatar_${Date.now()}.${ext}`)

            res = await apiFetch(`${BASE_URL}/users/me/avatar`, {
                method: 'POST',
                body: formData,
                credentials: 'include'
            })
        } else if(defaultAvatar) {
            res = await apiFetch(`${BASE_URL}/users/me/avatar`, {
                method: 'DELETE',
                credentials: 'include'
            })
        } else {
            return;
        }
        if(!res.ok) {
            setDefaultAvatar();
            return;
        }
        const data = await res.json();
        getAvatar(data)
        if(avatarUrl) {
            URL.revokeObjectURL(avatarUrl)
            avatarUrl = null;
        }
        avatarInput.value = "";
    } catch(err) {
        console.error('Network error:', err);
    }
}

function getAvatar(data) {
    if(data.avatar_url === null) {
        setDefaultAvatar();
        defaultAvatar = true;
    } else {
        if(avatarImg) {
            avatarImg.src = `${BASE_URL}${data.avatar_url}`;
        }
        profileMenuAvatar.src = `${BASE_URL}${data.avatar_url}`;
        profileLiAvatar.src = `${BASE_URL}${data.avatar_url}`;
        defaultAvatar = false;
    }
}

async function saveAddButtonState() {
    try {
        const res = await apiFetch(`${BASE_URL}/users/me/add_button`, {
            method: 'PUT',
            credentials: 'include'
        })
        if(!res.ok) {
            saveAddButtonStateLocal()
            throw new Error(`Server status: ${res.status}`)
        }
    } catch(err) {
        console.error(`Can't save add button state ${err}`)
    }
}

function saveAddButtonStateLocal() {
    localStorage.setItem("AddButton", String(addButton))
}

async function loadAddButtonState() {
    try {
        const res = await apiFetch(`${BASE_URL}/users/me`, {
            method: 'GET',
            credentials: 'include'
        })
        if(!res.ok) {
            loadLocalAddButtonState();
            throw new Error(`Server status: ${res.status}`)
        }
        const userData = await res.json();
        addButton = userData.add_button
    } catch(err) {
        console.error('Ошибка сети при загрузке флага кнопки добавления', err)
        loadLocalAddButtonState();
    }
}

function loadLocalAddButtonState() {
    const addButtonState = localStorage.getItem("AddButton");
    if (addButtonState === null) {
        addButton = true;
        return;
    }
    addButtonState === "true" ? addButton = true : addButton = false;
}

async function saveCities() {
    try {
        const res = await apiFetch(`${BASE_URL}/users/me/city`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                cities: Cities
            })
        })
        if(!res.ok) {
            saveCitiesLocal()
            throw new Error(`Server status: ${res.status}`)
        }
    } catch(err) {
        saveCitiesLocal()
        console.error(`Can't save cities array into the database`, err.message)
    }
}

function saveCitiesLocal() {
    const CitiesStorage = JSON.stringify(Cities);
    localStorage.setItem("Cities", CitiesStorage)
}

async function loadCities() {
    try {
        const res = await apiFetch(`${BASE_URL}/users/me`, {
            method: 'GET',
            credentials: 'include'
        })
        if(!res.ok) {
            loadLocalCities()
            return;
        }
        const userData = await res.json();
        Cities = userData.cities;
    } catch(err) {
        console.error('Ошибка сети при загрузке городов', err)
        loadLocalCities()
    }
}

function loadLocalCities() {
    const CitiesStorage = localStorage.getItem("Cities");
    Cities = JSON.parse(CitiesStorage) || []
}

async function forgotPassword() {
    hideErrors();
    const passForgotEmailInput = document.querySelector('#forgot-pass-input')
    const emailValue = passForgotEmailInput.value.trim().toLowerCase();
    try {
        const res = await fetch(`${BASE_URL}/forgot-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": emailValue
            })
        })
        if(!res.ok) {
            const error = new Error(`Can't use forgot password function ${res.status}`)
            error.status = res.status;
            throw error;
        }
        showForgotPassEmailCheckSlide()
        setEmailLink(emailValue)
    } catch(err) {
        if(err.status === 422) {
            showError(forgotPassForm, invalidEmailError)
        }
        console.log(`Can't use forgot password function ${err}`)
    }
}

async function resetPassword() {
    hideErrors();
    const newPassInput1 = document.querySelector('#reset-pass-1')
    const newPassInput2 = document.querySelector('#reset-pass-2')
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')
    if(!newPassInput1.value || !newPassInput2.value) {
        showError(resetPassForm, passResetEmptyFieldsError)
        return;
    } else {
        hideErrors();
    }
    if(newPassInput1.value !== newPassInput2.value) {
        showError(resetPassForm, passDontMatchError)
        return;
    } else {
        hideErrors();
    }
    try {
        const res = await fetch(`${BASE_URL}/reset-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "token": token,
                "new_password": newPassInput2.value
            })
        })
        if(!res.ok) {
            const error = new Error(`Can't use reset password function ${res.status}`)
            error.status = res.status;
            throw error;
        }
        showResetPassSuccessSlide();
    } catch(err) {
        console.log(`Can't use reset password function ${err}`)
        if(err.status === 502 || err.status === 503 || err.status === 504) {
            showError(resetPassForm, passResetServerError)
        } else {
            passResetServerError.textContent = "Something went wrong. Please try again later"
            showError(resetPassForm, passResetServerError)
        }
    }
}

//checkmark video
if(checkmarkVideo) {
    checkmarkVideo.playbackRate = 0.8;
    checkmarkVideo.addEventListener('timeupdate', () => {
        const loopStartTime = checkmarkVideo.duration * (25 / 60);
    
        if (checkmarkVideo.currentTime >= checkmarkVideo.duration - 0.05) {
            checkmarkVideo.currentTime = loopStartTime;
            checkmarkVideo.play();
        }
    });
}

async function baseAppRun() {
    await checkAuth();
}

document.addEventListener("DOMContentLoaded", ()=> {
    loadTheme();
    getMode();
    profileMenuToggle();
    baseAppRun();
    themeChangeBlock.addEventListener("mouseenter", ()=> {
        const allThemes = document.querySelectorAll(".theme")
        allThemes.forEach(el => el.classList.add("pointer-events"))
    })
    themeChangeBlock.addEventListener("mouseleave", ()=> {
        const allThemes = document.querySelectorAll(".theme")
        allThemes.forEach(el => el.classList.remove("pointer-events"))
    })
    
    document.getElementById("easy-mode-button")?.addEventListener("click", changeModeToEasy);
    document.getElementById("advanced-mode-button")?.addEventListener("click", changeModeToAdvanced);

    signupButtonChangeMode?.addEventListener("click", function() {
        authModeChange("signup", this)
    })
    signinButtonChangeMode?.addEventListener("click", function() {
        authModeChange("login", this)
    })

    if(usernameInput) {
        if(usernameInput?.value.length < 14) {
            shortInput = true;
        }
        addErrorMessageListener();
    }

    form?.addEventListener("submit", (e)=> {
        e.preventDefault();
        const usernameInput = document.querySelector(".profile-username-input");
        const allowedUsernameWidth = usernameInput?.value.length < 14;
        if(allowedUsernameWidth) {
            if(usernameInput?.value.length > 13 && shortInput) {
                submitProfileChanges(e)
            }
            else {
                submitProfileChanges(e, true)
            }
        }
    })
    form?.addEventListener("click", (e)=> {
        if(editingUsername === false) {
            const usernameInput = document.querySelector(".profile-username-input");
            if(!usernameInput) {
                createUsernameInput(true);
                editingUsername = true;
                e.stopPropagation();
            }
        }
    })
    forgotPassForm?.addEventListener('submit', (e)=> {
        e.preventDefault();
        forgotPassword();
    })
    resetPassForm?.addEventListener("submit", (e)=> {
        e.preventDefault();
        resetPassword();
    })
    document.addEventListener("mousedown", (e)=> {
        e.stopPropagation();
        const usernameInput = document.querySelector(".profile-username-input");
        if(editingUsername === true && !form.contains(e.target) && usernameInput.value.length > 0 && e.key !== "Enter" && e.target !== saveBtn) {
            const usernameInput = document.querySelector(".profile-username-input");
            const allowedUsernameWidth = usernameInput.value.length < 14;
            if(allowedUsernameWidth) {
                if(usernameInput.value.length > 13 && shortInput) {
                    submitProfileChanges(e, false, false)
                }
                else {
                    submitProfileChanges(e, true, false)
                }
            }
        }
        if(!profileMenu.contains(e.target) && !profileImgLi.contains(e.target)) {
            hideProfileMenu();
        }
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
    avatarInput?.addEventListener("change", (e)=> {
        const avatarFile = e.target.files[0]
        const MAX_SIZE_MB = 10;
        const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;
        if (!avatarFile) return;

        const allowedTypes = ["image/jpeg", "image/png"]

        if(!allowedTypes.includes(avatarFile.type)) {
            avatarInput.value = '';
            return;
        }

        if(avatarFile && avatarFile.size > MAX_SIZE_BYTES) {
            avatarInput.value = "";
            return;
        }

        if(avatarUrl) {
            URL.revokeObjectURL(avatarUrl)
        }
        avatarUrl = URL.createObjectURL(avatarFile)
        avatarImg.src = avatarUrl;
        defaultAvatar = false;
    })
    avatarDeleteBtn?.addEventListener("click", ()=> {
        if(avatarUrl) {
            URL.revokeObjectURL(avatarUrl);
        }
        avatarInput.value = "";
        setDefaultAvatar(true);
        defaultAvatar = true;
    })
    saveBtn?.addEventListener("click", ()=> {
        saveAvatar();
    })
    signUpPassInput?.addEventListener("input", function() {
        passCheck()
        passVisibilityBtn(this)
    })
    loginPassInput?.addEventListener("input", function() {
        passVisibilityBtn(this)
    })
    signUpBtn?.addEventListener("click", registration)
    signInBtn?.addEventListener("click", login)
    logoutBtns.forEach(el => el.addEventListener("click", logout))
})