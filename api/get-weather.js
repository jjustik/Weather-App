export default async function handler(req, res) {
    const { city } = req.query;
    const API_KEY = process.env.MY_SECRET_KEY; 

    // Если город не передан, сразу выдаем ошибку
    if (!city) {
        return res.status(400).json({ error: "City is required" });
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const apiResponse = await fetch(url);
        const data = await apiResponse.json();
        
        // Отдаем тот статус, который прислал OpenWeather (например 404, если города нет)
        res.status(apiResponse.status).json(data);
    } catch (error) {
        res.status(500).json({ error: "Ошибка на сервере" });
    }
}