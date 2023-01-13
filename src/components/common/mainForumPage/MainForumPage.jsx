import React, { useState } from 'react';
import './MainForumPage.css'
import CommentPopUp from '../commentpopup/CommentPopUp';
import { createRoot } from 'react-dom/client';

export default function MainForumPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className='mainforumpage'>
        <section className='topview'>
            <div className='user'>
                <h2>UserName</h2>
                <div className='topictext'>
                <img src="/" alt="ava" />
                <p>Loren ipsum sd;lfsdlfjlsdkjflkdsjflksdjf
                sdkjhfkjsdhfsdfsdfdsfdsssfdsdfsd</p>
                </div>
            </div>
            <button onClick={() => {
                setModalIsOpen(true);
                const container = document.getElementById("compop")
                const root = createRoot(container)
                root.render( <CommentPopUp isOpen={modalIsOpen} />)
            }}
            
            >Comment Post</button>
        </section>
        <section className='comments'>
            <img src="/" alt="avatar" />
            <div className='com'>
                <p>UserName YYYY-MM-DD</p>
                <div className='comPost'>
                Loren ipsum sd;lfsdlfjlsdkjflkdsjflksdjf
                sdkjhfkjsdhfsdfsdfdsfdsssfdsdfsd
                </div>
            </div>
        </section>
        <section className='comments'>
            <img src="/" alt="avatar" />
            <div className='com'>
                <p>UserName YYYY-MM-DD</p>
                <div className='comPost'>
                Loren ipsum sd;lfsdlfjlsdkjflkdsjflksdjf
                sdkjhfkjsdhfsdfsdfdsfdsssfdsdfsd
                </div>
            </div>
        </section>
        <section className='comments'>
            <img src="/" alt="avatar" />
            <div className='com'>
                <p>UserName YYYY-MM-DD</p>
                <div className='comPost'>
                Loren ipsum sd;lfsdlfjlsdkjflkdsjflksdjf
                sdkjhfkjsdhfsdfsdfdsfdsssfdsdfsd
                </div>
            </div>
        </section>
        <section className='comments'>
            <img src="/" alt="avatar" />
            <div className='com'>
                <p>UserName YYYY-MM-DD</p>
                <div className='comPost'>
                Loren ipsum sd;lfsdlfjlsdkjflkdsjflksdjf
                sdkjhfkjsdhfsdfsdfdsfdsssfdsdfsd
                </div>
            </div>
            <div id='compop'></div>
        </section>
    
    </div>
  )
}
