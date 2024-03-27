import { useEffect } from "react";
export const Login = () => {
  const token = localStorage.getItem("auth") || "";
  const handlesubmit = (e) => {
    e.preventDefault();
    let tkn = "You Are Authorized";
    localStorage.setItem("auth", tkn);
    window.location.href = "/";
  };
  useEffect(() => {
    if (token) {
      window.location.href = "/";
    }
  }, [token]);
  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handlesubmit}>
        <label htmlFor="">Email</label>
        <input required type="email" />
        <label htmlFor="">Password</label>
        <input required type="password" />
        <button type="submit" onClick={handlesubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
