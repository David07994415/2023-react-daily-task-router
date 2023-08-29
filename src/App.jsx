import './App.css';
import React from 'react'
import { HashRouter, NavLink, Routes, Route } from 'react-router-dom';
import { useNavigate, } from 'react-router-dom';
import { useState, useEffect} from "react";


const Todo = () => {
  const [islogin, setIsLogin] = useState(false);
  useEffect(() => {
    setIsLogin(true); 
  }, []);
  return <><Logout islogin={islogin}/>
  <p>這是 Todo 頁面</p></>;
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const Home = () => {
  return <p>這是首頁面</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        <Routes>
          <Route extra path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
        {/* Routes, Route 練習區 */}
        {/* 練習區 */}
        {/* 可自行定義 404 Not Found 的頁面 */}
        {/* <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          } /> */}
      </HashRouter>
    </div>
  );
}

function Logout({islogin}) {
  console.log(islogin);
  const nav = useNavigate();
  const btnlogout = () => { 
    if (islogin) nav('/login')
    else nav('/')
  };
  return <button onClick={ btnlogout }>登出按鈕</button>
}

export default App;
