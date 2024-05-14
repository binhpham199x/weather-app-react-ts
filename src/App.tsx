// import request from "request";

import { useEffect, useState } from "react";

function App() {
   const API_KEY = import.meta.env.VITE_API_KEY;

   const name = "hanoi";

   const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`;

   const [data, setData] = useState();

   const fetchData = async (): Promise<void> => {
      try {
         const response: Response = await fetch(url, {
            method: "GET",
         });

         if (!response.ok) {
            throw new Error("Network response was not ok");
         }

         setData(await response.json()); // Replace 'any' with the actual type of your response data
      } catch (error) {
         console.error("Error:", error);
      }
   };
   console.log(data);

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <>
         <h1 className="text-3xl font-bold underline">Hello world! </h1>

         <pre id="json">{JSON.stringify(data, undefined, 2)}</pre>
      </>
   );
}

export default App;
