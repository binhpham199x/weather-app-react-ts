// import request from "request";

import { BaseSyntheticEvent, useEffect, useRef, useState } from "react";
import { fetchCities } from "./services/CitiesService";
import SearchBox from "./components/SearchBox";
import Header from "./components/header/Header";
import CurrentForecast from "./components/today/TodayForecast";
import WeeklyForcast from "./components/weekly/WeeklyForecast";
import { CityApiData } from "./model/cityApi";
import { getPlaceFromInput } from "./utils/InputUtils";

function App() {
	const [data, setData] = useState<unknown>();

	const [city, setCity] = useState("");

	const [search, setSearch] = useState("");

	const latRef = useRef(0);
	const lonRef = useRef(0);


	const handleSearchChange = (event: BaseSyntheticEvent) => {
		setSearch(event.target.value);
	};

    const handleSearchClick = async() => {
        const searchInput = search.trim();
        const [city, country] = getPlaceFromInput(searchInput);

		setCity(search);
		setSearch("");
	};

	useEffect(() => {
		console.log(data);
	}, []);

	const handleClick = async () => {
		const apiData: CityApiData | undefined = await fetchCities();
		setData(apiData?.results);
		console.log(data);
	};

	



	useEffect(() => {
		console.log(city);
	}, [city]);

	return (
		<>
			<div
				id="appBg"
				className="flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-2 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200"
			>
				<div
					id="appWrapper"
					className="w-full h-[80vh] max-w-screen-lg flex-col flex gap-5 p-3 rounded-lg ring-8 ring-white ring-opacity-40 overflow-auto bg-slate-300 [&_*]:rounded-lg"
				>
					<Header></Header>
					<SearchBox
						value={search}
						onSearchClick={handleSearchClick}
						onSearchChange={handleSearchChange}
					/>
					<div id="forecastWrapper" className="columns-2 h-full">
						<CurrentForecast></CurrentForecast>
						<WeeklyForcast></WeeklyForcast>
					</div>
				</div>

				{/* {data != undefined && (
					<pre id="json">{JSON.stringify(data, undefined, 2)}</pre>
				)} */}
			</div>
		</>
	);
}

export default App;
