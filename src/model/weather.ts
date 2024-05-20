export interface CurrentWeather {
	city: string;
	country: string;
    date: string;
	currentTemp: number;
	icon: string;
	feelTemp: number;
	windSpeed: number;
	clouds: number;
	humidity: number;
}

export interface TodayForecastDetail {
	clockTime: string;
	icon: string;
	temp: number;
}

export interface HourlyForecastDetail {
    time: number;
	weekday: string;
	temp: number;
	humidity: number;
	windSpeed: number;
	clouds: number;
	description: string;
	icon: string;
}

