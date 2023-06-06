function Hero() {
  return (
    <div class="flex flex-col gap-4 mx-44 m-20  px-10 bg-gray-950 rounded py-10">
      <h1 class="text-[#cc99ff] text-2xl font-bold text-center">Welcome</h1>
      <label for="email" class="text-white ">
        Email
      </label>
      <input type="email" id="email" class="  bg-red-50 px-10 py-5 rounded" />
      <br />
      <label for="password" class="text-white">
        Password
      </label>
      <input
        type="password"
        id="password"
        class=" py-4 px-5 bg-red-50 rounded"
      />
      <br />

      <div class="flex mb-10 gap-5 -mt-10">
        <button class="bg-[#cc99ff] text-white rounded px-5 py-3 my-5 w-full">
          Login
        </button>
        <button class="border-2  border-[#cc99ff] bg-gray-950  text-white hover:bg-[#cc99ff] hover:text-white rounded px-5 py-3 my-5 w-full">
          Login
        </button>
      </div>
    </div>
  );
}

export default Hero;
