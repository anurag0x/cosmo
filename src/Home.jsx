import "./styles.css";
import { useEffect } from "react";
export const  Home=()=> {
  const token = localStorage.getItem("auth") || "";
  const handlelogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
    }
  }, [token]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={handlelogout}>Logout</button>
    </div>
  );
}
