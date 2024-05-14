function App() {
   const text = import.meta.env.VITE_API_KEY;
   return (
      <>
         <h1 className="text-3xl font-bold underline">Hello world! {text} </h1>
      </>
   );
}

export default App;
