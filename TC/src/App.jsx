import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import CreatePost from "./pages/Createpost/CreatePost";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";
import Details from "./pages/Details";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import Auth from "./pages/Auth/Auth";

function App() {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/create"
          element={isSignIn ? <CreatePost /> : <Navigate to="/auth" />}
        />
        <Route path="/details" element={<Details />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
