import React, {useEffect, useState} from 'react';
import logo from './images/MyLogo.webp';
import logo_white from './images/logo_white.webp';
import potrait from './images/potrait.webp';

import Experience from './sections/Experience'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Organisations from './sections/Organisations'
import Contact from './sections/Contact'

import resume from './SeanMichaelSUNTOSOResume.pdf'

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

  //navbar animation
  const [active,setActive] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;
  const handleClick = ()=>{
      setActive(!active)
  }

  const handleClickScroll = (value) => {
    const element = document.getElementById(`${value}`);
    const headerOffset = 150;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    const mobileOffsetPosition = elementPosition + window.pageYOffset - window.screen.height + 100 - headerOffset;
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      if(active){
        window.scrollTo({ top: mobileOffsetPosition, behavior: 'smooth' });
        setActive(false)
      } else {
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className='bg-[#f5f5f5]'>
      <header 
        style = {
          active ? {
            height: "100vh"
          }
          :
          {
          }
        }
        className={`header ${
          small ? "sticky top-0 bg-black lg:h-20 p-3 content" : "content bg-black lg:bg-transparent lg:container mx-auto lg:border-black border-b sticky top-0 lg:p-6 p-3"
        }`}>
        <div className='hidden lg:block'>
          <div>
            { small ?
              <img src={logo_white} className='w-36 mx-auto' alt="Sean Michael Suntoso" />
              :
              <img src={logo} className='w-48 mx-auto' alt="Sean Michael Suntoso"/>
            }
          </div>
          <div>
            <ul className={`flex place-content-center uppercase text-sm mt-5 ${small ? "text-white" : ""}`}>
              <li className='mx-6 hover:cursor-pointer hover:underline' onClick={() => handleClickScroll('experience')}>Experience</li>
              <li className='mx-6 hover:cursor-pointer hover:underline' onClick={() => handleClickScroll('education')}>Education</li>
              <li className='mx-6 hover:cursor-pointer hover:underline' onClick={() => handleClickScroll('skills')}>Skills</li>
              <li className='mx-6 hover:cursor-pointer hover:underline' onClick={() => handleClickScroll('organisations')}>Organisations</li>
              <li className='mx-6 hover:cursor-pointer hover:underline' onClick={() => handleClickScroll('contact')}>Contact</li>
            </ul>
          </div>
        </div>
        <div className='lg:hidden'>
          <img src={logo_white} className='w-40 mx-auto flex-1 flex items-center justify-center' alt="Sean Michael Suntoso"/>
          <div className='absolute right-1 inset-y-1'>
          <button
            className="flex flex-col h-10 w-12 rounded justify-center items-center group lg:hidden"
            onClick={() => handleClick()}
          >
            <div
              className={`${genericHamburgerLine} ${
                active
                  ? "rotate-45 translate-y-3 opacity-100"
                  : "opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                active ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                active
                  ? "-rotate-45 -translate-y-3 opacity-100"
                  : "opacity-100"
              }`}
            />
          </button>
          </div>
          {active?
            <div className="overflow-hidden">
                <ul className='place-content-center uppercase text-sm mt-5 text-center text-white'>
                  <li className='py-3 w-full' onClick={() => handleClickScroll('experience')}>Experience</li>
                  <li className='py-3 w-full' onClick={() => handleClickScroll('education')}>Education</li>
                  <li className='py-3 w-full' onClick={() => handleClickScroll('skills')}>Skills</li>
                  <li className='py-3 w-full' onClick={() => handleClickScroll('organisations')}>Organisations</li>
                  <li className='py-3 w-full' onClick={() => handleClickScroll('contact')}>Contact</li>
                </ul>
            </div>
          :
          <></>
          }
        </div>
      </header>
      <div className='container mx-auto'>
        <div className='text-center'>
          {
            quotes ? 
            <div className='mt-10 mb-14 mx-4'>
              <h2 className='tracking-widest'>RANDOM QUOTES</h2> 
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
        <div className='bg-[#C2BDB9]'>
          <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-5'>
            <div>
              <img src={potrait} className='w-full mx-auto' alt="potrait"/>
            </div>
            <div className='py-10 px-10'>
              <h1 className='font-medium xl:text-6xl lg:text-4xl text-3xl xl:mt-10 mb-5'>Hello, I am Sean Michael Suntoso</h1>
              <p className='xl:text-3xl text-2xl font-thin font-serif mb-10'>I am an Applied AI student in The University of Hong Kong. I am also a certified AWS Solution Architect - Associate and software developer.</p>
              <a href={resume} className='border-2 p-2 border-black hover:border-gray-500 hover:text-gray-600 hover:cursor-pointer xl:text-2xl lg:text-xl text-lg' target='_blank' rel="noreferrer">
                View resume
              </a>
            </div>
          </div>
        </div>
        <div id='experience'>
          <Experience/>
        </div>
        <div id='education'>
          <Education />
        </div>
        <div id='skills'>
          <Skills />
        </div>
        <div id='organisations'>
          <Organisations />
        </div>
        <div id='contact'>
          <Contact />
        </div>
        <div className='border-t-2 mt-20 pb-5 text-center'>
          <p className="text-sm mt-10 font-thin">
            Made with ♥ by Sean Michael Suntoso
          </p>
        </div>
      </div>
    </div>
  )
}