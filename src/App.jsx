import './App.css';
import React from 'react'
import { HashRouter, NavLink, Routes, Route,Outlet,useParams  } from 'react-router-dom';
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
const Post =() =>{
  return <div>
    <p>這是Post父層頁面</p>
    <Outlet />
  </div>
};
const PostID1 =() =>{
  let par = useParams();
  return <div>
    <p>這是1st_Post子層頁面</p>
    <p>PostID1:{par.postID1}</p>  
  </div> 
};
const PostID2 =() =>{
  let par2 = useParams();
  return <div>
    <p>這是2nd_Post2子層頁面</p>
    <p>PostID2:{par2.postID2}</p> 
  </div> 
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
          <NavLink to="/post1">
            <p>post頁面</p>
          </NavLink>
          <NavLink to="/post1/childrenpostpage123">
            <p>post 詳細頁面</p>
          </NavLink>
          <NavLink to="/post2/childrenpostpage456">
            <p>post2 詳細頁面</p>
          </NavLink>

        </div>
        <Routes>
          <Route extra path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/post1" element={<Post />} >
            <Route path=":postID1" element={<PostID1 />} />
          </Route>
          <Route path="/post2" element={<Post />} >
            <Route path=":postID2" element={<PostID2 />} />
          </Route>
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
