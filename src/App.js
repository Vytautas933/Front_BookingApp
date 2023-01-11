import React, { useEffect } from 'react';
import{  Foot, Header, MainPageBody, HeaderLogIn} from "./components/common";
import { useRef } from 'react';

function App() {

  const isLoggedIn = useRef(true);
  
  useEffect(() => {
    if(localStorage.getItem('user') === null) {
    isLoggedIn.current = false
  }}, []);

  return (
    <div className="App"> 
         {isLoggedIn.current ? (
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
