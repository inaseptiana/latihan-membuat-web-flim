import React, { useState } from "react";

const Register = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.value]: event.target.value });
  };

  console.log(userData);
  return (
    <div>
      <h1>Register</h1>
      <input type="text" placeholder="email" value={userData.email} name="email" onChange={handleChange} />
      <input type="password" placeholder="password" value={userData.password} name="password" onChange={handleChange} />

      <button onClick={() => console.log(userData)}>Daftar</button>
    </div>
  );
};

export default Register;
