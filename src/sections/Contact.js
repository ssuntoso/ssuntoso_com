import React from 'react';
import Title from '../components/Title'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact(){
  return(
    <div className='bg-gray-50  mt-10 pt-1 pb-14 px-4'>
      <Title head='Contact' highlight='Hit Me Up!'/>
      <p className='text-center font-serif text-light text-xl'>
        Are you interested in collaborating or want to connect or chat? If so, hit the button down below.
      </p>
      <div className='my-5 text-center'>
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
      </div>
    </div>
  )
}