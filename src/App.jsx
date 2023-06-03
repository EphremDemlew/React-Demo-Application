import { useState } from "react";
import Nav from "./components/Nav";
import useData from "./useData";
import Cards from "./components/Cards";
import Loading from "./components/Loading";

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
      <div className="py-10 px-20 font-semibold w-full h-full ">
        <h1 className="text-5xl py-10 text-teal-950 border-b-2 mb-10">
          Welcome to the library of games!!
        </h1>
        {isLoading && <Loading />}
        {data && (
          <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 mt-10">
            {data.map((game) => (
              <Cards
                key={game.id}
                title={game.name}
                imageUrl={game.background_image}
                Rating={game.rating}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
