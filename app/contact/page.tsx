import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar';;


export default function Contact() {

  return (
    <div>
      <Navbar />
      <main id="home" className="py-10 bg-transparent h-screen flex flex-col">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold about-me-text mb-4">Contact Me</h1>
          <div className="about-me-bg mb-4 p-6 shadow sm:rounded-lg">
            <h3 className="text-2xl font-bold text-gray-100 mb-4">Phone Number</h3>
            <p className="mt-4 text-gray-100">(720) 238-7323</p>
            <h3 className="text-2xl font-bold text-gray-100 mt-4">Email</h3>
            <p className="mt-4 text-gray-100">samc1253@gmail.com</p>
          </div>
        </div>
      <Footer />
      </main>
    </div>
  )
}
