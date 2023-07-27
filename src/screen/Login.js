import React, { useState } from "react";
import Base from "../component/Base";
import { Link,useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [credentials, setcredentials,] = useState({  email: "", password: "" })

  let  Navigat=useNavigate();
  const handalChange1 = async(event)=>{
    event.preventDefault();
    const responce =  await fetch("http://localhost:5000/api/loginuser",{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({ email: credentials.email, password: credentials.password})
    });
    const json = (await responce).json()
    console.log(json);

    if(json.success){
      alert("Enter Valied Credentials")
    }else{
      alert("Login successfully")
      Navigat("/")
    }
  }


  const handalChange = (e) => {
    // const { name, value } = e.target;
    // setInputdata({ ...inputdata, [name]: value });
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  };
  
  return (
    <div>
      <Base>
      <form onSubmit={handalChange1}>
        <div className="min-h-screen bg-purple-400 flex justify-center items-center">
          <div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
          <div className="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
          <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div>
              <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                Login an Account
              </h1>
              <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                Login an Account to enjoy all the services without any ads for
                free!
              </p>
            </div>
            <div className="space-y-4">
              <input
                type="email"
                name="email"
                autoFocus
                placeholder="Email"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                onChange={handalChange}
              />
              <input
                type="password"
                name="password"
                // id=""
                placeholder="Password"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                onChange={handalChange}
              />
            </div>
            <div className="text-center mt-6">
              <button
                className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl"
              >
                Login Account
              </button>
              <p className="mt-4 text-sm">
                Do not have an account?{" "}
                <Link className="underline cursor-pointer" to="/register">
                  {" "}
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
          <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
          <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
        </div>
        
        </form>
      </Base>
    </div>
  );
};

export default Login;
