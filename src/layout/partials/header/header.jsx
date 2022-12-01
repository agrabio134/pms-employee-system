import './header.css'
import Logo from '../../../assets/logo.png'
import React from 'react';
const HeaderPage = () => {
    return(
      <>
        <nav className="header-container">   
          <a href="/"><img className='logo' src={Logo} alt="logo" /></a>

        </nav>
        {/* <iframe src="http://localhost/api/payroll/notif/notif.php" frameborder="0"></iframe>    */}
        </>
    )
}
export default HeaderPage;