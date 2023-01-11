import './MainPageBody.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPageBody() {
  return (
    <body className='body'>
      <h2 className='msg1'>Our Messege</h2>
      <section className='messege'>
        <p className='loren'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
      </section>
      <h2 className='msg2'>Top photographers</h2>
      <section className='photograpgersAvatars'>
        <Link to="/sellerpage">
        <img className='avatar' src="/" alt="nuotrauka not found" />
        </Link>
        <Link to="/sellerpage">
        <img className='avatar' src="/" alt="nuotrauka not found" />
        </Link>
        <Link to="/sellerpage">
        <img className='avatar' src="/" alt="nuotrauka not found" />
        </Link>
        <Link to="/sellerpage">
        <img className='avatar' src="/" alt="nuotrauka not found" />
        </Link>
        <Link to="/sellerpage">
        <img className='avatar' src="/" alt="nuotrauka not found" />
        </Link>
        <Link to="/sellerpage">
        <img className='avatar' src="/" alt="nuotrauka not found" />
        </Link>
        <Link to="/sellerpage">
        <img className='avatar' src="/" alt="nuotrauka not found" />
        </Link>
      </section>
      <h2 className='msg3'>Top forum topics</h2>
      <section className='forums'>
        <section className='forumMsg1'>
        <Link to="/mainforumpage">
          <h3>
            Topic one
          </h3>
          </Link>
          <p className='countbox'>
            Post Count
          </p>
        </section>
        <section className='forumMsg1'>
        <Link to="/mainforumpage">
          <h3>
            Topic two
          </h3>
          </Link>
          <p className='countbox'>
            Post Count
          </p>
        </section>
        <section className='forumMsg1'>
        <Link to="/mainforumpage">
          <h3>
            Topic three
          </h3>
          </Link>
          <p className='countbox'>
            Post Count
          </p>
        </section>
        <section className='forumMsg1'>
        <Link to="/mainforumpage">
          <h3>
            Topic fourth
          </h3>
          </Link>
          <p className='countbox'>
            Post Count
          </p>
        </section>
        <section className='forumMsg1'>
        <Link to="/mainforumpage">
          <h3>
            Topic five
          </h3>
          </Link>
          <p className='countbox'>
            Post Count
          </p>
        </section>
      </section>
    </body>
  )
}
