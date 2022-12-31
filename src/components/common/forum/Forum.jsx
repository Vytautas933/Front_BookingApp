import React from 'react'
import './Forum.css'

export default function Forum() {
  return (
    <div className='forum'>
        <div className='top'>
            <h1>Forums</h1>
            <button>Create new Topic</button>
        </div>
        <div className='main'>
        <section className='topic'>
            <img src="/" alt="avatar" />
            <section className='text'>
                <h4>Topic</h4>
                <p>Loren ipsum sd;lfsdlfjlsdkjflkdsjflksdjfsdkjhfkjsdhfsdfsdfdsfdsssfdsdfsd</p>
                <div className='count'> Post Count</div>
            </section>
        </section>
        <section className='topic'>
            <img src="/" alt="avatar" />
            <section className='text'>
                <h4>Topic</h4>
                <p>Loren ipsum sd;lfsdlfjlsdkjflkdsjflksdjfsdkjhfkjsdhfsdfsdfdsfdsssfdsdfsd</p>
                <div className='count'> Post Count</div>
            </section>
        </section>
        <section className='topic'>
            <img src="/" alt="avatar" />
            <section className='text'>
                <h4>Topic</h4>
                <p>Loren ipsum sd;lfsdlfjlsdkjflkdsjflksdjfsdkjhfkjsdhfsdfsdfdsfdsssfdsdfsd</p>
                <div className='count'> Post Count</div>
            </section>
        </section>
        <section className='topic'>
            <img src="/" alt="avatar" />
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
