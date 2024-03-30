import React from "react";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import { Route, Routes,Navigate } from "react-router-dom";
import {Toaster} from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();

  const isSmallScreen = window.innerWidth < 700;

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        {isSmallScreen ? (<>
          <p className="text-white text-3xl">COMING SOON...<br />(Please view on larger screens) </p>
        </>
        ) : (
          <Routes>
            <Route
              path="/"
              element={authUser ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={authUser ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/signup"
              element={authUser ? <Navigate to="/" /> : <Signup />}
            />
          </Routes>
        )}
        <Toaster />
        <div className="copyrights">Designed and developed by Suganthan S &copy; 2024 </div>
      </div>
    </>
  );
}

export default App;
