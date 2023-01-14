import React, { useEffect, useState } from 'react';
import { Header } from '../components/common'
import {Forum} from '../components/common'
import {Foot }from '../components/common'
import {HeaderLogIn} from '../components/common';

function ForumPage() {

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
      <Forum></Forum>
      <Foot></Foot>
    </div>
  )
}

export default ForumPage;
	