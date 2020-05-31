import React, { useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

function App() {
  const getToken = async () => {
    let token = localStorage.getItem("token");
    if (!token) {
      const login = await axios.post("http://localhost:3001/users/login", {
        email: "tuliofaria@devpleno.com",
        passwd: "abc123",
      });
      token = login.data.token;
      localStorage.setItem("token", token);
    }
    const decoded = jwtDecode(token);
    console.log(decoded);

    const user = await axios.get("http://localhost:3001/users/me", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(user)
  };
  useEffect(() => {
    getToken();
  }, []);
  return <div className="App"></div>;
}

export default App;
