import { useState } from "react";
import Nav from "./components/Nav";
import useData from "./useData";
import Cards from "./components/Cards";

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
        {isLoading && <h1 className="px-20 py-5 ">Loading...</h1>}
        {data && (
          <div className="aspect-video grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
            {data.map((game) => (
              <Cards
                key={game.id}
                title={game.name}
                imageUrl={game.background_image}
                hasData={true}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
