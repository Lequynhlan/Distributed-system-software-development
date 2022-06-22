import React, { useState } from "react";
import Header from "../../headers/Header";

import axios from "axios";
import "./login.css";
export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/register", { ...user });

      localStorage.setItem("firstLogin", true);

      window.location.href = "/products";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <>
      <Header />
      <div className="login-page">
        <form onSubmit={registerSubmit}>
          <h2>Register</h2>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            value={user.name}
            onChange={onChangeInput}
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={user.email}
            onChange={onChangeInput}
          />

          <input
            type="password"
            name="password"
            required
            autoComplete="on"
            placeholder="Password"
            value={user.password}
            onChange={onChangeInput}
          />

          <div className="row_id">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  );
}
