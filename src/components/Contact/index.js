import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMap,
  } from 'react-leaflet'
  
  

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect( () => {
        setTimeout( () => {
            setLetterClass('text-animate-hover')
        }, 3000)
    } , [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
          .sendForm(
            'service_sx8dl5t',
            'template_gllfz9j',
            refForm.current,
            'BI_Bgen-1UZjAXaGj'
          )
          .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            }, 
            () => {
                alert('Failed to send the message. Please try again.')
            })
        
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in front-end remote job opportunities, be it junior or entry level roles. 
                        I'll be more than happy and eager to contribute to your company or start-up. I also have no problem learning new things which I find is the minimum for any tech roles :).
                        However, if you have another request or question, don't hesitate to contact me using the below form either. 
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input 
                                        type='text'
                                        name='name'
                                        placeholder='Name'
                                        required
                                    />
                                </li>
                                <li className='half'>
                                    <input 
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        required
                                    />
                                </li>
                                <li>
                                    <input 
                                        type='text'
                                        name='subject'
                                        placeholder='Subject'
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                      name='message'
                                      placerholder='Message'
                                      required
                                    >
                                    </textarea>
                                </li>
                                <li>
                                    <input
                                        type='submit'
                                        className='flat-button'
                                        value='SEND' 
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Jorge Hurtado,
                    <br />
                    Peru,
                    <br />
                    Jr. Sagitario Mz16 lt 44, <br />
                    Santiago de Surco <br />
                    <span>jorgehrtado91@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[-12.163694, -76.994205]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[-12.163694, -76.994205]}>
                            <Popup>
                                My home :)
                            </Popup>
                        </Marker>

                    </MapContainer>
                </div>

                
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact
