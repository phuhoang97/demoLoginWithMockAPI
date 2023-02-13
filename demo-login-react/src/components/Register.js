import React, { useState } from "react";
import axios from "axios";

function Resgister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = { email: email, password: password };
    axios
      .post("http://localhost:3000/profile", info)

      .catch((err) => console.log(err));
  };
  return (
    <div className='App'>
      <div>
        <h3>Register page</h3>
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

export default Resgister;
