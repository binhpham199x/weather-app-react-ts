const OPEN_WEATHER_URL = "https://api.openweathermap.org/data/2.5";
const OPEN_WEATHER_API_KEY = import.meta.env.VITE_API_KEY;

const WEATHER = "/weather";
const FORECAST = "/forecast";

type Units = "standard" | "metric" | "imperial";
type ForecastType = "today" | "weekly";

export const fetchWeatherData = async (
   forecastType: ForecastType,
   lat: number,
   lon: number,
   units: Units = "metric",
   cnt: number = 40
): Promise<unknown> => {
   const SEGMENT = forecastType == "today" ? WEATHER : FORECAST;

   const url =
      OPEN_WEATHER_URL +
      SEGMENT +
      `?lat=${lat}&lon=${lon}&cnt=${cnt}&units=${units}&appid=${OPEN_WEATHER_API_KEY}`;
   try {
      const response = await fetch(url);

      if (!response.ok) {
         throw new Error("Network response was not ok");
      }

      const res = await response.json();
      return res;
      
   } catch (error) {
      console.error("Error:", error);
   }
};
