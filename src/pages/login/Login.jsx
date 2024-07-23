import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../app/reducers/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {


  const [userName,setUserName]=useState()
  const [password,setPassword]=useState()

  const dispatch=useDispatch()

  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(login({username:userName,password})).then(action=>{
      localStorage.setItem("accessToken",action.payload.token)
      navigate('/profile')
    })
    
  }

  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center bg-main-black">
        <form onSubmit={handleSubmit} className="p-10 bg-[#101010] rounded flex justify-center items-center flex-col shadow-2xl shadow-main-red">
          <p className="mb-5 text-3xl uppercase text-main-white">Вход</p>
          <input
          onChange={(e)=>setUserName(e.target.value)}
            type="text"
            name="username"
            className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
            placeholder="Имя пользователя"
            required
          />
          <input
          onChange={(e)=>setPassword(e.target.value)}
            type="password"
            name="password"
            className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
            placeholder="Пароль"
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
