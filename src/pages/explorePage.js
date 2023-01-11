import React, { useEffect } from 'react';
import { useRef } from 'react';

import { Header } from '../components/common'
import {Explore} from '../components/common'
import {Foot }from '../components/common'
import {HeaderLogIn} from '../components/common';

function ExplorePage() {

  const isLoggedIn = useRef(true);
  
  useEffect(() => {
    if(localStorage.getItem('user') === null) {
    isLoggedIn.current = false
  }}, []);


  return (
    <div>
      <>
      {isLoggedIn.current ? (
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
