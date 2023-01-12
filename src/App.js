import React, { useEffect, useState } from 'react';
import{  Foot, Header, MainPageBody, HeaderLogIn} from "./components/common";

function App() {


  const[isLoggedIn, setIsLoggedIn] = useState(false)
  
  useEffect(() => {
    if(localStorage.getItem('user') != null) {
    setIsLoggedIn(true);
    
  }},[isLoggedIn]);

  return (
    <div className="App"> 
         {!isLoggedIn ? (
                <Header />
            ) : (
              <HeaderLogIn />
            )}
      <MainPageBody />
      <Foot />
      
    </div>
  )
}

export default App;
