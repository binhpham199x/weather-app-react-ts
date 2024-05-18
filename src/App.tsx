// import request from "request";

import { useEffect, useState } from "react";
import { fetchCities } from "./services/CitiesService";
import SearchBox from "./components/SearchBox";
import Header from "./components/Header";
import CurrentForecast from "./components/today/TodayForecast";
import WeeklyForcast from "./components/weekly/WeeklyForecast";

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
         <div
            id="appBg"
            className="flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200"
         >
            <div
               id="appWrapper"
               className="w-full max-w-screen-sm bg-white p-2 rounded-xl ring-8 ring-white ring-opacity-40"
            >
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
         </div>
      </>
   );
}

export default App;
