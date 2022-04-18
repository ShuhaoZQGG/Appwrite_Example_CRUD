import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

function RoutesManager() {
  return(
    <div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/users' element={<Users/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path={"*"} element={<Home/>} />
    </Routes>
    </div>
  );
}

export default RoutesManager;