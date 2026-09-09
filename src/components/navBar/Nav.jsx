import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Nav.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Nav(){ 
    // const [darkMode, setDarkMode] = useState(false);

//     const changeMode=()=>{
// setDarkMode(!darkMode)
//     }

         
     

    return(

        <div className="nav">

        <h2 className="nav-title">
        Shope
        
        <span className="nav-title-highlight">mini</span>
    </h2>

      <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login" className="login-link">Log In</Link>
            </div>

    <div>
       <ThemeToggle/>
    </div>

  
        
        </div>
    )

}


export default Nav