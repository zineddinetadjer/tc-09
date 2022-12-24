import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Details from "./pages/Details";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import Auth from "./pages/Auth";

function App() {
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/create"
          element={isSignIn ? <CreatePost /> : <Navigate to="/auth" />}
        />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/profile/id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
