import React from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
function Navbar() {
  return (
    <section className='navBarSection'>
        <header className="header flex">
            <div className="logDiv">
                <a href="a" className="logo flex">
                    <h1> <MdOutlineTravelExplore className="icons"/> Travel. </h1>
                </a>
            </div>

             <div className="navbar">
                <ul className="navLists Flex">
                    <li className="navItems">
                        <a href="" className="navLink">Home</a>
                    </li>

                    <li className="navItems">
                        <a href="" className="navLink">Packages</a>
                    </li>

                    <li className="navItems">
                        <a href="" className="navLink">Shop</a>
                    </li>

                    <li className="navItems">
                        <a href="" className="navLink">About</a>
                    </li>

                    <li className="navItems">
                        <a href="" className="navLink">Pages</a>
                    </li>

                    <li className="navItems">
                        <a href="" className="navLink">News</a>
                    </li>

                    <li className="navItems">
                        <a href="" className="navLink">Contact</a>
                    </li>

                    <button
                        className='btn'>
                            <a href='#'> BOOK NOW </a>
                    </button>


                </ul>
             </div>

        </header>
    </section>
  )
}

export default Navbar