import React from "react";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        {/* <Login /> */}
        {/* <Signup /> */}
        <Home />
      </div>  
    </>
  );
}

export default App;
