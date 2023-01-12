import React, { useEffect, useState } from 'react';
import { Header } from '../components/common'
import {MainForumPage} from '../components/common'
import { Foot }from '../components/common'
import {HeaderLogIn} from '../components/common';


function MainForumPag() {

  const[isLoggedIn, setIsLoggedIn] = useState(false)
  
  useEffect(() => {
    if(localStorage.getItem('user') != null) {
    setIsLoggedIn(true);
    
  }},[isLoggedIn]);

  return (
    <div>
      {!isLoggedIn ? (
                <Header />
            ) : (
              <HeaderLogIn />
            )}
      <MainForumPage></MainForumPage>
      <Foot></Foot>
    </div>
  )
}

export default MainForumPag
