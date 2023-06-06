function Nav() {
  return (
    <div className="px-20 py-10 bg-teal-950  text-xl  text-white  flex justify-between items-center">
      <p className="font-extrabold text-2xl">Adnan</p>
      <div>
        <ul className="flex gap-10 justify-center items-center">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>{" "}
          <li className="cursor-pointer">Contact</li>
          <li className="bg-white text-teal-800 rounded hover:bg-opacity-90 font-bold cursor-pointer px-10 py-4">
            Join
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
