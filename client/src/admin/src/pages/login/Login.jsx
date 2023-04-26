import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

export const Login =()=>{
    {/*const [credentials, setCredentials] = useState({username: "", password: ""});
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      login(dispatch, credentials);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCredentials(prevCredentials => ({ ...prevCredentials, [name]: value }));
    };
*/}
   return(
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        name="username"
        placeholder="username"
       // value={credentials.username}
       // onChange={handleChange}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        name="password"
        placeholder="password"
       // value={credentials.password}
        //onChange={handleChange}
      />
      <button 
        type="submit" 
       // onClick={handleSubmit} 
        style={{ padding: 10, width:100 }}
      >
        Login
      </button>
    </div>
  );
}