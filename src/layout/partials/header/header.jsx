import './header.css'
import Logo from '../../../assets/logo.png'
import React from 'react';
const HeaderPage = () => {
    return(
        <nav className="header-container">      
          <img className='logo' src={Logo} alt="logo" />

        </nav>
    )
}
export default HeaderPage;