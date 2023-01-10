import React, { useState } from 'react';
import './Forum.css'
import { createRoot } from 'react-dom/client';
import TopicPopUp from '../topicPopUp';
import { Link } from 'react-router-dom';

export default function Forum() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // const { navigateTo } = useRouting();

    
  return (
    <div className='forum'>
        <div id='pop'></div>
        <div className='top'>
            <h1>Forums</h1>
            <button onClick={() => {
                setModalIsOpen(true);
                const container = document.getElementById("pop")
                const root = createRoot(container)
                root.render( <TopicPopUp isOpen={modalIsOpen} />,
                )
            }}>Create new Topic</button>
        </div>
        <div className='main'>
        <section className='topic'>
            <Link to="/mainforumpage">
            <img className='imgs' src="/" alt="avatar" />
            </Link>
            <section className='text'>
                <h4>Topic</h4>
                <p>Loren ipsum sd;lfsdlfjlsdkjflkdsjflksdjfsdkjhfkjsdhfsdfsdfdsfdsssfdsdfsd</p>
                <div className='count'> Post Count</div>
            </section>
        </section>
        <section className='topic'>
            <Link to="/mainforumpage">
            <img className='imgs' src="/" alt="avatar" />
            </Link>
            <section className='text'>
                <h4>Topic</h4>
                <p>Loren ipsum sd;lfsdlfjlsdkjflkdsjflksdjfsdkjhfkjsdhfsdfsdfdsfdsssfdsdfsd</p>
                <div className='count'> Post Count</div>
            </section>
        </section>
        <section className='topic'>
            <Link to="/mainforumpage">
            <img className='imgs' src="/" alt="avatar" />
            </Link>
            <section className='text'>
                <h4>Topic</h4>
                <p>Loren ipsum sd;lfsdlfjlsdkjflkdsjflksdjfsdkjhfkjsdhfsdfsdfdsfdsssfdsdfsd</p>
                <div className='count'> Post Count</div>
            </section>
        </section>
        <section className='topic'>
            <Link to="/mainforumpage">
            <img className='imgs' src="/" alt="avatar" />
            </Link>
            <section className='text'>
                <h4>Topic</h4>
                <p>Loren ipsum sd;lfsdlfjlsdkjflkdsjflksdjfsdkjhfkjsdhfsdfsdfdsfdsssfdsdfsd</p>
                <div className='count'> Post Count</div>
            </section>
        </section>
        
        </div>
    </div>
  )
}
