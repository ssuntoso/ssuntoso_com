import React, {useEffect, useState} from 'react';
import logo from './images/MyLogo.webp';
import potrait from './images/potrait.jpeg';

import Experience from './sections/Experience'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Organisations from './sections/Organisations'
import Contact from './sections/Contact'

export default function App() {
  const [quotes, setQuotes] = useState(null)
  useEffect(() => {
    const rand = Math.floor(Math.random() * 1640);
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => setQuotes(data[rand]))
  },[])

  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 10)
      );
    }
  }, []);

  return (
    <div className=''>
      <header className={`header ${
          small ? "sticky top-0 py-5 bg-white" : " container mx-auto border-b-2 sticky top-0 py-10"
        }`}>
        <div>
          <img src={logo} className='w-60 mx-auto' alt="Sean Michael Suntoso"/>
        </div>
      </header>
      <div className='container mx-auto'>
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
        <div className='bg-neutral-100'>
          <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-5'>
            <div>
              <img src={potrait} className='w-full mx-auto' alt="potrait"/>
            </div>
            <div className='py-10 px-10'>
              <h1 className='font-medium xl:text-6xl lg:text-4xl text-3xl lg:mt-10 mb-5'>Hello, I am Sean</h1>
              <p className='xl:text-4xl lg:text-2xl text-2xl text-gray-400 font-thin font-serif'>I am an Applied AI student in The University of Hong Kong. I am also a certified AWS Solution Architect - Associate and software developer.</p>
            </div>
          </div>
        </div>
        <Experience />
        <Education />
        <Skills />
        <Organisations />
        <Contact />
        <div className='border-t-2 mt-20 mb-5 text-center'>
          <p className="text-sm mt-10 font-thin">
            Made with ♥ by Sean Michael Suntoso
          </p>
        </div>
      </div>
    </div>
  )
}