export default function Login() {
  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center bg-main-black">
        <form className="p-10 bg-[#101010] rounded flex justify-center items-center flex-col shadow-md">
          <p className="mb-5 text-3xl uppercase text-main-white">Вход</p>
          <input
            type="email"
            name="email"
            className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
            placeholder="Password"
            required
          />
          <button
            className="bg-main-red hover:bg-purple-900 text-white font-bold p-2 rounded w-80"
            id="login"
            type="submit"
          >
            <span>Вход</span>
          </button>
        </form>
      </div>
    </div>
  );
}
