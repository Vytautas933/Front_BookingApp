import React, { useEffect } from 'react';
import { useRef } from 'react';
import { Header } from '../components/common'
import { UserPreview } from '../components/common'
import { Foot }from '../components/common'
import {HeaderLogIn} from '../components/common';


function SellerPagePreview() {

const isLoggedIn = useRef(true);

useEffect(() => {
  if(localStorage.getItem('user') === null) {
  isLoggedIn.current = false
}}, []);

  return (
    <div>
        {isLoggedIn.current ? (
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
