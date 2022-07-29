import React from "react";
import Home from "./Home.jsx";
import { Routes , Route } from "react-router-dom";

const App = ()=>{
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App;