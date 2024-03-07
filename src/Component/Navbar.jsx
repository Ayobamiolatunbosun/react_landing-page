import React from 'react'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div>
        <nav class='nav'>
            <div class="logo">
                <h1>BOSUN CARS</h1>
            </div>
            <div class="nav-links">
                <a href='#'>Explore Cars</a>
                <a href='#'>Our Services</a>
                <a class='btn' href='#'>About</a>
            </div>
        
        </nav>
      {/* <div class="logo">
                <h3>OLATUNBOSUN <span>Cars Hub</span></h3>
        </div>
            <div class="nav-links">
                <a href="#">Explore Cars</a>
                <div>
                    <a href="#">Our Services</a>
                    <a class="btn" href="#">About</a> 
                </div>
            </div> */}
    </div>
  )
}

export default Navbar
