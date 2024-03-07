import React from 'react'
import "../styles/Main.css"

const Main = () => {
  return (
    <div>
            <div class='content'>
            <h1>Buy the best <br />Quality Cars</h1>
            <input class="search" type="text" placeholder='Search Any Car'/>
            <button class="button" type='submit'>Search</button>

            <div class="form">
                <div className="box">
                    <input type="text" name='email' placeholder='Enter your email' />
                    <input type="password" name='password' placeholder='Password' />
                </div>
                <div class='link'>
                    <a href='#'>Log in</a>
                </div>
                <div className="link1">
                    <a href='#'>Forgetten Password</a>
                </div>
                <div className="link2">
                    <a href='#'>Create New Account</a>
                </div>
            </div>

            
        </div>

        
    </div>
  )
}

export default Main
