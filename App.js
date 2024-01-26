import React from 'react';
import './App.css';
import NavBar from './components/nav';
import Body from './components/body';
import CreateUser from './components/createuser';
import OTP from './components/otp';
import Sucess from './components/successful';
import AllPost from './components/allPost';
import CreatePost from './components/createpost'; 
import GetData from './components/getdata';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Body />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/sucess" element={<Sucess />} />
        <Route path="/post/" element={<AllPost />} >
        <Route path="createuser" element={<CreatePost />} />
        <Route path="getpostdata" element={<GetData />} />
        <Route path="getcommentdata" element={<GetData />} />
        <Route path="getreplieddata" element={<GetData />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
