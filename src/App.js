import React, {useEffect, useState} from 'react';
import logo from './images/MyLogo.webp';
import potrait from './images/potrait.jpeg';

import Experience from './sections/Experience'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [quotes, setQuotes] = useState(null)
  useEffect(() => {
    const rand = Math.floor(Math.random() * 1640);
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => setQuotes(data[rand]))
  },[])
  console.log(quotes)

  return (
    <div className='container mx-auto'>
      <div>
        <div className='border-b-2'>
          <img src={logo} className='w-60 mx-auto my-10' alt="Sean Michael Suntoso"/>
        </div>
        <div className='text-center'>
          {
            quotes ? 
            <div className='mt-10 mb-14 mx-4'>
              <h2 className='tracking-widest font-extralight'>RANDOM QUOTES</h2> 
              <p className='mt-8 mb-2 text-lg font-medium font-serif'>
                "{quotes.text}"
              </p>
              <p className='font-light italic'>
                -{quotes.author}
              </p>
            </div>
            :
            <></>
          }
        </div>
      </div>
      <div className='bg-neutral-100'>
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-5'>
          <div>
            <img src={potrait} className='w-full mx-auto' alt="potrait"/>
          </div>
          <div className='my-10 mx-10'>
            <h1 className='font-medium xl:text-6xl lg:text-4xl text-3xl lg:mt-10 mb-5'>Hello, I am Sean</h1>
            <p className='xl:text-4xl lg:text-2xl text-2xl text-gray-400 font-thin font-serif'>I am an Applied AI student in The University of Hong Kong. I am also a certified AWS Solution Architect - Associate and software developer.</p>
          </div>
        </div>
      </div>
      <Experience />
      <div className='border-t-2 mt-20 mb-5 text-center'>
            <p className="text-4xl my-7">
              <a href="mailto:contact@ssuntoso.com" target="_blank" rel="noreferrer" className="hover:text-gray-500 p-3">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://wa.me/85263592040" target="_blank" rel="noreferrer" className="hover:text-gray-500 p-3">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="https://github.com/ssuntoso" target="_blank" rel="noreferrer" className="hover:text-gray-500 p-3">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/ssuntoso" target="_blank" rel="noreferrer" className="hover:text-gray-500 p-3">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.instagram.com/ssuntoso/" target="_blank" rel="noreferrer" className="hover:text-gray-500 p-3">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </p>
            <p className="text-sm mt-10 font-thin">
              Made with ♥ by Sean Michael Suntoso
            </p>
          </div>
    </div>
  )
}