'use client'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Slideshow() {
  return (
    <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={5000}
    >
        <div>
            <img className='image max-w-full object-contain' loading='lazy' src="/sam_and_dogs_gondola.jpg" alt="Sam with his dogs" />
        </div>
        <div>
            <img className='image max-w-full object-contain' loading='lazy' src="/sam_headshot.jpeg" alt="A headshot of Sam" />
        </div>
        <div>
            <img className='image max-w-full object-contain' loading='lazy' src="/sam_and_boys_biking.jpeg" alt="Sam mountain biking with his friends" />
        </div>
        <div>
            <img className='image max-w-full object-contain' loading='lazy' src="/sam_and_megan_wedding.jpeg" alt="Sam and his wife at their wedding" />
        </div>
        <div>
            <img className='image max-w-full object-contain' loading='lazy' src="/sam_with_fiona.jpg" alt="Sam and his dog, Fiona" />
        </div>

    </Carousel>
  );

}