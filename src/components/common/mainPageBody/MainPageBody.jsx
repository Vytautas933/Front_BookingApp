import './MainPageBody.css'
import React from 'react'

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
        <img src="/" alt="nuotrauka not found" />
        <img src="/" alt="nuotrauka not found" />
        <img src="/" alt="nuotrauka not found" />
        <img src="/" alt="nuotrauka not found" />
        <img src="/" alt="nuotrauka not found" />
        <img src="/" alt="nuotrauka not found" />
        <img src="/" alt="nuotrauka not found" />
      </section>
      <h2 className='msg3'>Top forum topics</h2>
      <section className='forums'>
        <section className='forumMsg1'>
          <h3>
            Topic one
          </h3>
          <p className='countbox'>
            Post Count
          </p>
        </section>
        <section className='forumMsg1'>
          <h3>
            Topic two
          </h3>
          <p className='countbox'>
            Post Count
          </p>
        </section>
        <section className='forumMsg1'>
          <h3>
            Topic three
          </h3>
          <p className='countbox'>
            Post Count
          </p>
        </section>
        <section className='forumMsg1'>
          <h3>
            Topic fourth
          </h3>
          <p className='countbox'>
            Post Count
          </p>
        </section>
        <section className='forumMsg1'>
          <h3>
            Topic five
          </h3>
          <p className='countbox'>
            Post Count
          </p>
        </section>
      </section>
    </body>
  )
}
