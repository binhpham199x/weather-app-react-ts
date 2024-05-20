import { HourlyForecastDetail } from "../model/weather";
import { WeatherHourlyApi, WeatherTodayApiData } from "../model/weatherApi";
import { ALL_DESCRIPTIONS } from "./Constants";
import { getDate, getWeekday } from "./DatetimeUtils";

export interface CurrentWeather {}

export const descriptionToIconName = (desc: string) => {
	const iconName = ALL_DESCRIPTIONS.find((item) => item.description === desc);
	return iconName?.icon || "unknown";
};

export const mapToCurentWeatherData = (
	apiData: WeatherTodayApiData
): CurrentWeather => {
	const date = new Date(apiData.dt * 1000);

	const res: CurrentWeather = {
		city: apiData.name,
		country: apiData.sys.country,
		date: getDate(date),
		currentTemp: apiData.main.temp,
		icon: apiData.weather[0].icon,
		feelTemp: apiData.main.feels_like,
		windSpeed: apiData.wind.speed,
		clouds: apiData.clouds,
		humidity: apiData.main.humidity,
	};

	return res;
};

export const mapToHourlyData = (
	apiData: WeatherHourlyApi
): HourlyForecastDetail => {
	const date = new Date(apiData.dt * 1000);
	const res: HourlyForecastDetail = {
		time: apiData.dt,
		weekday: getWeekday(date),
		temp: apiData.main.temp,
		humidity: apiData.main.humidity,
		windSpeed: apiData.wind.speed,
		clouds: apiData.clouds.all,
		description: apiData.weather[0].description,
		icon: apiData.weather[0].icon,
	};

	return res;
};

export const groupByDay = (
	weatherData: WeatherHourlyApi[]
): {
	[key: string]: WeatherHourlyApi[];
} => {
	const groupedData: { [key: string]: WeatherHourlyApi[] } = {};

	weatherData.forEach((data) => {
		const date = new Date(data.dt * 1000);

		const day = date.toISOString().split("T")[0];

		if (!groupedData[day]) {
			groupedData[day] = [];
		}

		groupedData[day].push(data);
	});

	return groupedData;
};
