import React, { useEffect, useState } from 'react'
import './UserPreview.css'
import Calendar from 'react-calendar'
import { booking, getPhotosList } from '.';
import Cucikas from './images/Cucikas.png'
import { useParams } from 'react-router-dom'



export default function UserPreview() {
    let { id } = useParams();
    const [date, setDate] = useState(new Date());
    const [isDisabled, setIsDisabled] = useState(false);
    const [photos, setPhotos] = useState([]);
    // const [isLoading, setIsLoading] = useState(false)

    // useEffect(() => {
    //     getusersList()
    //       .then(data => {
    //         console.log(data)
    //         const photoPromises = data.map(user => getPhotosList(user));
    //         Promise.all(photoPromises)
    //           .then(blobs => blobs.map(blob => URL.createObjectURL(blob)))
    //           .then(photos => setPhotos(photos))
    //           .catch(error => console.log(error));
    //       })
    //       .catch(error => console.log(error));
    //   }, []);
    
    useEffect(() => {
        async function fetchPhotos() {
            let photos = [];
            for (let i = 0; i < 4; i++) {
                let photo = await getPhotosList(id);
                photos.push(URL.createObjectURL(photo));
            }
           
                
           
           
        }
        fetchPhotos();
        
    }, [id]);

    console.log(photos)

    useEffect(() => {
        if (localStorage.getItem("user") === null) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, []);

    const onChange = date => {
        setDate(date);
    };



    return (
        <div className='userPreview'>
            <section className='info'>
                <section className='user'>
                    <h2 className='usernam'>Username</h2>
                    <img className='avatar' src={Cucikas} alt="avatar" />
                    <div className='rating'>
                        <p>Rating &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.0</p>
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
                    <div className='half'>
                        <h2>Calendar</h2>
                        <div className='available'>
                            <p>Available dates</p>
                            <div className='green'></div>
                        </div>
                        <div className='booked'>
                            <p>Booked dates</p>
                            <div className='red'></div>
                        </div>
                        <button id='book' onClick={booking}>Book</button>
                    </div>
                    <div className='cal' >
                        <Calendar
                            onChange={onChange}
                            value={date}
                            tileDisabled={() => isDisabled}
                        />
                    </div>
                </section>
            </section>
            <section id='nuotrauka' className='userPhotos'>
                
                    
                    {/* <img className='pht1' src={photos} alt="foto" /> */}
                {/* <img className='pht2' src={Panda} alt="foto" />
                    <img className='pht1' src={Panda} alt="foto" />
                    <img className='pht2' src={Panda} alt="foto" />
                    <img className='pht1' src={Panda} alt="foto" />
                    <img className='pht2' src={Panda} alt="foto" /> */}




            </section>


        </div>
    )
}
