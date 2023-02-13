import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get("http://localhost:3000/profile")
      .then((res) => {
        const result = res.data.find((e) => {
          return e.email === email;
        });

        if (!result) {
          alert("Tài khoản không tồn tại");
        } else {
          if (result.password !== password) {
            console.log("Mật khẩu không chính xác");
          } else {
            console.log("login thành công");
          }
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='App'>
      <div>
        <h3>Login page</h3>
        <form onSubmit={handleSubmit}>
          <label>Nhập email: </label>
          <input
            type='text'
            placeholder='Nhập email ...'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <label>Nhập password: </label>
          <input
            type='text'
            placeholder='Nhập password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
