

export default function Register() {
  return (
    <div>
        
        <div className="w-screen h-screen flex justify-center items-center bg-main-black">
        <form className="p-10 bg-[#101010] rounded flex justify-center items-center flex-col shadow-md">
          <p className="mb-5 text-3xl uppercase text-main-white">Регистрация</p>
          <input
            type="text"
            name="firstname"
            className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
            placeholder="Имя"
            required
          />
          <input
            type="text"
            name="lastname"
            className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
            placeholder="Фамилия"
            required
          />
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
            placeholder="Пароль"
            required
          />
          <input
            type="password"
            name="password"
            className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
            placeholder="Павтор пароля"
            required
          />
          <button
            className="bg-main-red hover:bg-purple-900 text-white font-bold p-2 rounded w-80"
            id="login"
            type="submit"
          >
            <span>Регистрация</span>
          </button>
        </form>
      </div>

    </div>
  )
}
