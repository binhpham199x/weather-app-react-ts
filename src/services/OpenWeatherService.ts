const OPEN_WEATHER_URL = "https://api.openweathermap.org/data/2.5";
const OPEN_WEATHER_API_KEY = import.meta.env.VITE_API_KEY;

const WEATHER = "/weather";
const FORECAST = "/forecast";

type Units = "standard" | "metric" | "imperial";

export const fetchWeatherData = async (
	lat: number,
	lon: number,
	units: Units = "metric",
	cnt: number = 40
) => {
	const urlWeekly =
		OPEN_WEATHER_URL +
		FORECAST +
		`?lat=${lat}&lon=${lon}&cnt=${cnt}&units=${units}&appid=${OPEN_WEATHER_API_KEY}`;

	const urlToday =
		OPEN_WEATHER_URL +
		WEATHER +
		`?lat=${lat}&lon=${lon}&units=${units}&appid=${OPEN_WEATHER_API_KEY}`;

	try {
		const [weatherPromise, forecastPromise] = await Promise.all([
			fetch(urlToday),
			fetch(urlWeekly),
		]);
		const weatherResponse = await weatherPromise.json();
		const forcastResponse = await forecastPromise.json();

		if (!weatherResponse.ok || !forcastResponse.ok) {
			throw new Error("Network response was not ok");
		}

		return [weatherResponse, forcastResponse];
	} catch (error) {
		console.error("Error:", error);
	}
};
