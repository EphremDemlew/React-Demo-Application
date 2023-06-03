function Cards({ title, imageUrl, hasData }) {
  return (
    <>
      {hasData ? (
        <div className="rounded flex flex-col gap-5 ">
          <h1 className="text-xl font-semibold">{title}</h1>
          <img src={imageUrl} alt={title} className="rounded" />
        </div>
      ) : (
        <div className="rounded flex flex-col gap-5 bg-gray-100">
          <h1 className="text-xl font-semibold animate-pulse w-44 h-6"></h1>
          <img src={imageUrl} alt={title} className="rounded" />
        </div>
      )}
    </>
  );
}

export default Cards;
