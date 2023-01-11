import React, { useEffect } from 'react';
import { useRef } from 'react';

import { Header } from '../components/common'
import {MainForumPage} from '../components/common'
import { Foot }from '../components/common'
import {HeaderLogIn} from '../components/common';


function MainForumPag() {

  const isLoggedIn = useRef(true);

  useEffect(() => {
    if(localStorage.getItem('user') === '') {
    isLoggedIn.current = false
  }}, []);

  return (
    <div>
      {isLoggedIn.current ? (
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
