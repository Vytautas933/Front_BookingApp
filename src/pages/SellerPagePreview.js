import React, { useEffect, useState } from 'react';
import { Header } from '../components/common'
import { UserPreview } from '../components/common'
import { Foot }from '../components/common'
import {HeaderLogIn} from '../components/common';


function SellerPagePreview() {

  const[isLoggedIn, setIsLoggedIn] = useState(false)
  

useEffect(() => {
  const btn = document.getElementById('book')
  if(localStorage.getItem('user') != null) {
    setIsLoggedIn(true);
    btn.style.backgroundColor = 'black';
    
    
  }},[isLoggedIn]);

  return (
    <div>
        {!isLoggedIn ? (
                <Header />
            ) : (
              <HeaderLogIn />
            )}
        <UserPreview></UserPreview>
        <Foot></Foot>
    </div>
  )
}

export default SellerPagePreview
