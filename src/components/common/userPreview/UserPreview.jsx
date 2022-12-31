import React from 'react'
import './UserPreview.css'

export default function UserPreview() {
  return (
    <div className='userPreview'>
    <section className='info'>
        <section className='user'>
            <h2>Username</h2>
            <img className='avatar' src="/" alt="avatar" />
            <div className='rating'>
                <p>Rating</p>
                <p>5.0</p>
            </div>
        </section>

        <section className='bio'>
            <h2>Bio</h2>
            <div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
        </section>
        <section className='calendar'>
            <h2>Calendar</h2>
            <div className='cal'></div>
            <div className='available'>
                <p>Available dates</p>
                <div className='green'></div>
            </div>
            <div className='booked'>
                <p>Booked dates</p>
                <div className='red'></div>
            </div>
            <button>Book</button>
        </section>
    </section>
        <section className='userPhotos'>
            <img className='pht1' src="/" alt="foto" />
            <img className='pht2' src="/" alt="foto2" />
            <img className='pht1' src="/" alt="foto" />
            <img className='pht2' src="/" alt="foto2" />
            <img className='pht1' src="/" alt="foto" />
            <img className='pht2' src="/" alt="foto2" />
        </section>

      
    </div>
  )
}
