import React, { useState, useEffect } from 'react'
import sty from './Header.module.css'
import { Link, Navigate } from "react-router-dom";
import { FaHome, FaQuestion, FaBed, FaMoneyCheck, FaIdCardAlt, FaSignOutAlt } from "react-icons/fa";
import { FaIdBadge } from "react-icons/fa6"
import { TbRobotFace } from "react-icons/tb";
import { auth } from './firebase';


const Header = () => {

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/";
      console.log("Logged out successfully!")
    } catch (err) {
      console.error(err.message);
      alert(err.message)
    }
  }

  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    })
  });

  return (
    <div className={sty.container}>
      <nav className={sty.con_nav}>
        <ul>
          <li><a href="/" className={sty.logo}>
            <img src="/img/logo(1).jpeg" alt="logo" />
            <Link to='Home' className={sty.logo_h}>Roomify</Link>
          </a></li>

          <li>
            <Link to='Home' className={sty.nav_item}><span className={sty.nav_logo}><FaHome color='white' size={20} /></span> Home</Link>
          </li>

          <li>
            <Link to='Profile' className={sty.nav_item}><span className={sty.nav_logo}><FaIdBadge color='white' size={20} /></span> Profile</Link>
          </li>

          <li>
            <Link to='Rooms' className={sty.nav_item}><span className={sty.nav_logo}><FaBed color='white' size={20} /></span> Rooms</Link>
          </li>
          <li>
            <Link to='Add_Room' className={sty.nav_item}><span className={sty.nav_logo}><FaMoneyCheck color='white' size={20} /></span>Add Room</Link>
          </li>

          <li>
            <Link to='About' className={sty.nav_item}><span className={sty.nav_logo}><FaQuestion color='white' size={20} /></span> About</Link>
          </li>

          {
            (user) ? <li>
              <span className={sty.logout}><FaSignOutAlt size={20} color='white' /></span>
              <Link to='/' className={sty.logout_h} onClick={handleLogout}> Log out</Link>
            </li> : <li>
              <span className={sty.logout}><FaSignOutAlt size={20} color='white' /></span>
              <Link to='/' className={sty.logout_h}> Log in</Link>
            </li>
          }

        </ul>
      </nav>
    </div>
  )
}

export default Header