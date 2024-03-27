import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Home";

export default function App() {
  const token = localStorage.getItem("auth") || "";
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [token]); // Corrected dependency array
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
