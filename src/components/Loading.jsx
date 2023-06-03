import Cards from "./Cards";

function Loading() {
  return (
    <div>
      {
        <div className="aspect-video grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((i) => (
            <Cards key={i} isLoading={true} />
          ))}
        </div>
      }
    </div>
  );
}

export default Loading;
