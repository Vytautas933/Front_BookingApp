import React, { useEffect, useState } from 'react';
import { Header } from '../components/common'
import {Explore} from '../components/common'
import {Foot }from '../components/common'
import {HeaderLogIn} from '../components/common';

function ExplorePage() {

  const[isLoggedIn, setIsLoggedIn] = useState(false)
  
  useEffect(() => {
    if(localStorage.getItem('user') != null) {
    setIsLoggedIn(true);
    
  }},[isLoggedIn]);


  return (
    <div>
      <>
      {!isLoggedIn ? (
                <Header />
            ) : (
              <HeaderLogIn />
            )}
      <Explore></Explore>
      <Foot></Foot>
      </>
    </div>
  )
}

export default ExplorePage
