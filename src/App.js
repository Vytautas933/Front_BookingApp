import React, { useEffect, useState } from 'react';
import{  Foot, Header, MainPageBody, HeaderLogIn} from "./components/common";
import { useRef } from 'react';

function App() {

  // const isLoggedIn = useRef(true);
  const[isLoggedIn, setIsLoggedIn] = useState(false)
  
  useEffect(() => {
    console.log(isLoggedIn)
    console.log("ggg")
    if(localStorage.getItem('user') != null) {
    setIsLoggedIn(true);
    
  }}, []);

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
