import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { ShieldAlert,X } from "lucide-react";

const Signup = () => {

    const navigate=useNavigate()

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [alert, setalert] = useState()

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const data={
          username:usernameRef.current.value,
          email:emailRef.current.value,
          password:passwordRef.current.value
        }


        try{
        const response = await api.post(
            "/auth/register",
            data
        );

        navigate("/dashboard");

        }
        catch(error){
        setalert(error.response.data.message);
        setTimeout(() => {
          setalert("");
        }, 2000); 
        }
      }

  return (
    <div 
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="register bg-white w-130 rounded-3xl shadow-2xl p-10">
        <div>
        <div className="flex justify-between items-center flex-row">
          <h1 className="top text-4xl font-bold">Get Started!</h1>
          <div onClick={()=>{navigate(-1);}}
            className="bg-blue-200 hover:bg-blue-300 transition cursor-pointer duration-300 p-2 rounded-full inline-flex">
              <X size={25} />
          </div>
        </div>

          <p className="text-sm text-gray-400 mt-2">
            Already have an account?
            <Link to="/login" className="signin ml-1">
              Sign In
            </Link>
          </p>
        </div>

        <form onSubmit={(e)=>{
            handleSubmit(e)
        }} className="mt-8 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
              Enter Username
            </label>

            <input
            required
            ref={usernameRef}
              type="text"
              placeholder="@username"
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#6a51f6] transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
              Enter Email
            </label>

            <input
              required
              ref={emailRef}
              type="email"
              placeholder="user@gmail.com"
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#6a51f6] transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
              Enter Strong Password
            </label>

            <input
            ref={passwordRef}
              required
              type="password"
              placeholder="••••••••"
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#6a51f6] transition-colors duration-300"
            />
          </div>

          <button
            type="submit"
            className="mt-3 rounded-xl bg-[#6a51f6] py-3 text-white font-semibold hover:opacity-90 transition-opacity duration-300 cursor-pointer"
          >
            Create Account
          </button>
        </form>
      </div>
      {alert && (
      <div
        className="fixed top-5 right-5 gap-2 w-80 bg-[#fedee0] flex px-6 py-4 rounded-lg shadow-xl font-semibold animate-slide-in">
        <ShieldAlert color="#ff0000" /> {alert}
      </div>
        )}
    </div>
  );
};

export default Signup;