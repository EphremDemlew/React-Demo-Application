function Nav() {
  return (
    <div className="w-full flex bg-gray-800">
      <div
        className=" w-full text-xl text-white px-8 py-5 flex 
                      justify-center items-center gap-10"
      >
        <div className="bg-sky-500 rounded-full h-14 w-14"></div>
        <h1 className="bg-gray-950 hover:bg-opacity-50 rounded px-4 py-2 cursor-pointer">
          Dashboard
        </h1>
        <h1 className="hover:bg-gray-600 cursor-pointer px-4 py-2 rounded">
          Team
        </h1>
        <h1 className="hover:bg-gray-600 cursor-pointer px-4 py-2 rounded">
          Project
        </h1>
        <h1 className="hover:bg-gray-600 cursor-pointer px-4 py-2 rounded">
          Calendar
        </h1>
      </div>
      <div className=" w-full flex justify-end items-center px-10 gap-4">
        <div className="bg-sky-200 rounded-full h-8 w-8"></div>
        <div className="bg-teal-500 rounded-full h-14 w-14"></div>
      </div>
    </div>
  );
}

export default Nav;
Nav;
