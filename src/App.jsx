import { Route, Routes } from "react-router-dom";
import "./App.css";
import FirstLanding from "./pages/landing/firstLanding";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Projects from "./components/projects";
import Rezume from "./components/rezume";
import Chat from "./components/chat";
import Search from "./components/search";
import Account from "./components/account";
import Notification from "./components/notification";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstLanding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile/projects" element={<Projects />} />
          <Route path="/profile/rezume" element={<Rezume />} />
          <Route path="/profile/chat" element={<Chat />} />
          <Route path="/profile/search" element={<Search />} />
          <Route path="/profile/account" element={<Account />} />
          <Route path="/profile/natification" element={<Notification />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
