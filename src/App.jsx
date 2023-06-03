import { useState } from "react";
import Nav from "./components/Nav";
import useData from "./useData";

function App() {
  const [count, setCount] = useState(0);

  const { data, error, isLoading } = useData(
    `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}`
  );

  if (error) {
    throw new Error(error);
  }

  return (
    <>
      <Nav />
      <div className="py-10 px-20 font-semibold w-full h-full bg-red-200">
        {isLoading && <h1 className="px-20 py-5 ">Loading...</h1>}
        {data && <h1> Herray!! the data is here and is </h1>}
      </div>
    </>
  );
}

export default App;
