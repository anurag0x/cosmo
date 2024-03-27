import Home from "./Home";
import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import { useEffect, useState } from "react";
import { PrivateRouter } from "./PrivateRouter";
export default function App() {
  const token = localStorage.getItem("auth") || "";
  const [isauth, setisauth] = useState(false);
  useEffect(() => {
    if (!token) {
      setisauth(false);
    } else {
      setisauth(true);
    }
  }, token);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
