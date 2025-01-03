import React from 'react'
import Header from './Header'
import Footer from './Footer'

const About = () => {
  return (
    <div>
        <Header/>
        <main className="d-flex justify-content-center align-items-center text-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/view-ancient-egyptian-civilization-culture_23-2151735476.jpg?t=st=1726397766~exp=1726401366~hmac=3da06642801afe80719bc716aaaef8f5d7ce39e863515339b60a1aae5f406a71&w=1800')",
          backgroundSize: 'cover',
          minHeight: '110vh',
          position: 'relative',
          backgroundAttachment: 'fixed',
        }}>
            <div
            className="overlay"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 1,
            }}
          ></div>
        <div>
            
        </div>
        </main>
        <Footer/>
    </div>
  )
}

export default About