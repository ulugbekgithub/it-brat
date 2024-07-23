import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../app/reducers/authSlice";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate =useNavigate()
  const [userName, setuserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPwd, setRepeatPwd] = useState("");
  const dispatch=useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("register",userName, firstName, lastName, email, password, repeatPwd);
    dispatch(register({username:userName,first_nama:firstName,last_name:lastName,email,password,confirm_password:repeatPwd})).then(action=>{
      localStorage.setItem('accessToken',action.payload.token);
      navigate('/sign-in')
    })
  };

  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center bg-main-black">
        <form
          onSubmit={handleSubmit}
          className="p-10 bg-[#101010] rounded flex justify-center items-center flex-col shadow-2xl shadow-main-red"
        >
          <p className="mb-5 text-3xl uppercase text-main-white">Регистрация</p>
          
          <input
            onChange={(e) => setuserName(e.target.value)}
            type="text"
            name="username"
            className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
            placeholder="Имя пользователя"
            required
          />
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            name="firstname"
            className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
            placeholder="Имя"
            required
          />
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            name="lastname"
            className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
            placeholder="Фамилия"
            required
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
            placeholder="Email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
            placeholder="Пароль"
            required
          />
          <input
            onChange={(e) => setRepeatPwd(e.target.value)}
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
  );
}
