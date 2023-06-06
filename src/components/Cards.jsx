function Cards({ title, imageUrl, isLoading, Rating }) {
  return (
    <>
      {isLoading ? (
        <div className="rounded flex flex-col gap-5 bg-gray-100">
          <div className="rounded aspect-video bg-gray-300 animate-pulse"></div>
          <div className=" flex justify-between items-center  pb-5 rounded">
            <h1 className="text-xl font-semibold bg-gray-300 animate-pulse w-44 h-8 "></h1>
            <p className="font-extrabold text-red-500 text-lg bg-gray-300 animate-pulse w-28 h-8"></p>
          </div>
        </div>
      ) : (
        <div className="rounded flex flex-col cursor-pointer gap-2">
          <img src={imageUrl} alt={title} className="rounded aspect-video" />
          <div className=" flex justify-between items-center p-2 py-5 ">
            <h1 className="text-xl font-semibold ">{title}</h1>
            <p className="font-extrabold text-xl">
              Rating{" "}
              <span className="font-extrabold text-red-500 text-lg">
                {Rating}{" "}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Cards;
