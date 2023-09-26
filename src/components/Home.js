import React from 'react'
import i1 from '../Assets/i1.jpg'
import i2 from '../Assets/i2.jpeg'
import i3 from '../Assets/i3.jpg'

export default function Home() {
  return (
    <>
    <divc className= 'container text-center'>
        <div>
            <h1 className='kalam-font mt-2'>We Feed the peoples in need!</h1>
            <p className='display-4 fs-5 roboto-font custom-text-color'>NoWaste’s technology allows businesses to safely donate their excess food and access enhanced tax deductions.</p>
        </div>  
        <div id="carouselExampleCaptions" className="carousel slide custom-carousel" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active carousel-item img">
            <img src={i1} className="d-block w-100" alt="image1" />
            <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
            </div>
            <div className="carousel-item carousel-item img">
            <img src={i2} className="d-block w-100" alt="image2" />
            <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
            </div>
            </div>
            <div className="carousel-item carousel-item img">
            <img src={i3} className="d-block w-100" alt="image3" />
            <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </divc>
    <hr />
    <div className='container text-center mt-4'>
        <h2>How does NoWaste's solution works?</h2>
        <p className='container display-3 fs-6 roboto-font mt-4'>
        Food waste and hunger are inextricably linked issues, and Copia™ has developed the world’s 
        first end-to-end solution that addresses both. Restaurants, hotels, hospitals, corporate cafeterias, 
        and other businesses with food use Copia’s technology to understand overproduction trends and reduce surplus 
        over time, while ensuring that excess food is used to its highest and best potential — to feed people in need. All you need is a mobile device, a few minutes a day, and the motivation to change the world (for the better).
        </p>
    </div>
    </>

        

  )
}
