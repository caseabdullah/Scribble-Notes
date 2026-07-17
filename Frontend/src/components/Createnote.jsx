import React, { useRef } from "react";
import { X } from "lucide-react";
import api from "../api/axios";
import { useNavigate, useOutletContext } from "react-router-dom";

const Createnote = () => {
  const { getnotes } = useOutletContext();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const navigate = useNavigate();


  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const note = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    };


    try{

      const response = await api.post(
      "/create",
      note);
        getnotes();
      }
      catch(error){

      console.log(error.response.data);
      }

      titleRef.current.value = "";
      descriptionRef.current.value = "";
      navigate(-1)
    }

  return (
    <div onClick={()=>{
      navigate(-1);
    }} 
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div onClick={(e) => e.stopPropagation()}
      className="bg-white w-130 rounded-3xl shadow-2xl p-10">

        <div className="flex justify-between items-center flex-row">
          <h1 className="text-4xl font-bold">
          Create Note
          </h1>

          <div onClick={()=>{
            navigate(-1);
          }}
           className="bg-blue-200 hover:bg-blue-300 transition cursor-pointer duration-300 p-2 rounded-full inline-flex">
            <X size={25} />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-5"
        >

          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
              Note Title
            </label>

            <input
              ref={titleRef}
              required
              type="text"
              placeholder="Enter note title"
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#6a51f6]"
            />
          </div>


          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
              Description
            </label>

            <textarea
              ref={descriptionRef}
              required
              rows="5"
              placeholder="Write your note here..."
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:border-[#6a51f6]"
            />
          </div>


          <button
            type="submit"
            className="rounded-xl bg-[#8874fd] transition duration-300  hover:bg-[#6a51f6] py-3 text-white font-semibold cursor-pointer"
          >
            Save Note
          </button>

        </form>

      </div>
    </div>
  );
};

export default Createnote;