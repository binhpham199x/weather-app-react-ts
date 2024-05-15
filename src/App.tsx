// import request from "request";

import { useEffect, useState } from "react";
import { fetchCities } from "./services/CitiesService";
import SearchBox from "./components/SearchBox";
import Header from "./components/Header";
import CurrentForecast from "./components/CurrentForecast";
import WeeklyForcast from "./components/WeeklyForcast";

function App() {
	// const API_KEY = import.meta.env.VITE_API_KEY;

	// const name = "hanoi";

	const url =
		"https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?where=startswith(name,'Han')";

	const [data, setData] = useState<unknown>();

	const fetchData = async (): Promise<unknown> => {
		try {
			const response: Response = await fetch(url);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const res = await response.json();
			// setData(res);
			return res; // Replace 'any' with the actual type of your response data
		} catch (error) {
			console.error("Error:", error);
		}
	};

	useEffect(() => {
		console.log(data);
	}, []);

	const handleClick = async () => {
		const apiData = await fetchCities();
		setData(apiData);
		console.log(data);
	};

	return (
		<>
			<div id="appWrapper">
				<Header></Header>
				<SearchBox />
				<div id="forecastWrapper">
					<CurrentForecast></CurrentForecast>
					<WeeklyForcast></WeeklyForcast>
				</div>
			</div>

			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
				onClick={handleClick}
			>
				Click
			</button>

			{data != undefined && (
				<pre id="json">{JSON.stringify(data, undefined, 2)}</pre>
			)}
		</>
	);
}

export default App;
