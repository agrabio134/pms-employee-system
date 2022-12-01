import './App.css' 
import MainNav from './layout/shared/MainNav'
import React, { useState } from "react";
import HeaderPage from './layout/partials/header/header';
// import SubNav from './layout/shared/SubNav';



const App = () => {
  
  return (
    <div>
      <div>
        <HeaderPage/>
        <MainNav />
        {/* <SubNav/> */}
      </div>



    </div>
  )
}

export default App
