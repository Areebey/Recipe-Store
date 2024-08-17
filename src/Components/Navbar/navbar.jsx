// import React from 'react'
import { Link } from "react-router-dom"
import logo from "..//../Images/pngwing.com.png"

const navbar = () => {
  return (
    <nav>        
        <div className='navbar'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
            <ul>
            <Link className="icon" to="/">Home</Link>
            <Link className="icon" to="/">Products</Link>
            <Link className="icon" to="/">Services</Link>
            <Link className="icon" to="/">About</Link>
            <button>Login</button>
            <button>SIgnUp</button>
            </ul>
        </div>
    </nav>

  )
}

export default navbar
