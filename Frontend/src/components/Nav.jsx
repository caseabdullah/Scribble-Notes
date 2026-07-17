import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div className="nav bg-[#f8fafc] flex justify-between items-center px-10 py-3 flex-row">
        <div className=' w-full flex justify-between items-center px-10 rounded-full py-4 flex-row'>
          <div className="log font-bold text-4xl">Scribble</div>
          <div className="auth flex justify-between items-center flex-row gap-7">
            <Link to="login" className="login px-5 py-3 rounded-xl font-medium cursor-pointer">Log in</Link>
            <Link to="signup" className="signup px-5 py-3 rounded-xl font-medium cursor-pointer">Get Started !</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
    
  )
}

export default Nav