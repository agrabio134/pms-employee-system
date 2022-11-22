import './App.css' 
import MainNav from './layout/shared/MainNav'
import React, { useState } from "react";
import HeaderPage from './layout/partials/header/header';



const App = () => {
  
  return (
    <div>
      <div>
        <HeaderPage/>
        <MainNav />
      </div>



    </div>
  )
}

export default App
