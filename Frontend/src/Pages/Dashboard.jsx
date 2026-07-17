import React, { useEffect, useState } from 'react'
import { Link, Outlet,useNavigate } from 'react-router-dom';
import { CirclePlus } from 'lucide-react';
import api from "../api/axios";
const Dashboard = () => {
  const navigate = useNavigate();

    const [notes, setnotes] = useState([]);
    const [user, setuser] = useState("")

    const deleteNote =async(index)=>{

      try{
        await api.delete(`/delete/${index}`);
        getnotes();
      }
      catch(err){
        console.log(err);
      }

    }

    const getnotes=async()=>{
      try
      {
        const response=await api.get('/allnotes');
        setnotes(response.data.notes.notes);
        await setuser(response.data.notes.username.username);
      }
      catch(err){
        console.log(err);
      }
    }
    useEffect(()=>{
      const checkAuth = async()=>{

    try{
      await api.get("/dashboard"); // checks JWT + user exists
      getnotes(); // only fetch notes if authorized
    }
    catch(err){
      navigate("/");
    }

  }

  checkAuth();
    },[])

  return (
    <div>
      <div className="intro flex items-start justify-between px-10 py-8">
          <div className='w-130 bg-blue-200 px-10 py-6 rounded-2xl'>
            <h1 className="font-bold text-4xl">
            Hello, {user}
            </h1>
            <h2 className='pt-4 font-medium'>
              Welcome Back To Scribble
            </h2>
          </div>

          <Link to="createnote"
          className="flex items-center gap-2 rounded-xl bg-amber-200 px-5 py-3 text-black font-medium transition-all cursor-pointer duration-300 hover:bg-amber-300 hover:shadow-lg">
          <CirclePlus size={20} />
            Create Note
          </Link>
      </div>

      <div className="allnotes px-10 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {notes.map((note, index) => (
            <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 transition duration-300 flex flex-col h-60"> 
            <h3 className="text-xl font-bold mb-3 text-gray-800 wrap-break-word">
            {note.title}
            </h3>

            <p className="text-gray-600 leading-relaxed line-clamp-4 wrap-break-word">
            {note.description}
            </p>

            <div className="mt-auto flex justify-between pt-5">
              <Link
              to='updatenote'
              state={{
                note:note,
                index:index
              }}
                className="cursor-pointer px-4 py-2 rounded-lg bg-emerald-200 hover:bg-emerald-300  transition">
                Update
              </Link>

              <button
                onClick={()=>{
                  deleteNote(index);
                }}
                className="cursor-pointer px-4 py-2 rounded-lg bg-red-200 hover:bg-red-300 transition">
                Delete
              </button>
            </div>

              </div>
            ))}

          </div>
      </div>

      <Outlet context={{getnotes}}/>
    </div>
  )
}

export default Dashboard