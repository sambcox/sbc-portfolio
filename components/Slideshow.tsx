'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

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
        <Image
          className='image max-w-full object-contain'
          src="/sam_and_dogs_gondola.jpg"
          alt="Sam with his dogs"
          width={1200}
          height={800}
          loading="lazy"
        />
      </div>
      <div>
        <Image
          className='image max-w-full object-contain'
          src="/sam_headshot.jpeg"
          alt="A headshot of Sam"
          width={1200}
          height={800}
          loading="lazy"
        />
      </div>
      <div>
        <Image
          className='image max-w-full object-contain'
          src="/sam_and_boys_biking.jpeg"
          alt="Sam mountain biking with his friends"
          width={1200}
          height={800}
          loading="lazy"
        />
      </div>
      <div>
        <Image
          className='image max-w-full object-contain'
          src="/sam_and_megan_wedding.jpeg"
          alt="Sam and his wife at their wedding"
          width={1200}
          height={800}
          loading="lazy"
        />
      </div>
      <div>
        <Image
          className='image max-w-full object-contain'
          src="/sam_with_fiona.jpg"
          alt="Sam and his dog, Fiona"
          width={1200}
          height={800}
          loading="lazy"
        />
      </div>
    </Carousel>
  );
}