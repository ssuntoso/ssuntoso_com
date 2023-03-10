import React from 'react';
import Title from '../components/Title'
import Link from '../components/Link'

import AWSCert from '../images/logos/AWS_badge.webp'
import IBM from '../images/logos/IBM.webp'

import python from '../images/logos/python.webp'
import cpp from '../images/logos/Cpp.webp'
import jptr from '../images/logos/Jupyter.webp'
import numpy from '../images/logos/numpy.webp'
import pandas from '../images/logos/pandas.webp'
import scikit from '../images/logos/scikit.webp'
import torch from '../images/logos/pytorch.webp'
import tf from '../images/logos/tf.webp'
import opencv from '../images/logos/opencv.webp'
import git from '../images/logos/Git.webp'
import aws from '../images/logos/aws.webp'
import html from '../images/logos/html.webp'
import css from '../images/logos/css.webp'
import ts from '../images/logos/ts.webp'
import js from '../images/logos/js.webp'
import reactJS from '../images/logos/react.webp'
import gatsby from '../images/logos/gatsby.webp'
import next from '../images/logos/next.webp'
import psql from '../images/logos/psql.webp'
import docker from '../images/logos/docker.webp'
import linux from '../images/logos/linux.webp'
import node from '../images/logos/node.webp'
import express from '../images/logos/Expressjs.webp'
import jira from '../images/logos/jira.svg'
import conflu from '../images/logos/conflu.webp'
import clickup from '../images/logos/clickup.webp'
import m365 from '../images/logos/365.webp'
import ps from '../images/logos/ps.webp'
import pixel from '../images/logos/pixelmator.webp'
import finalcut from '../images/logos/finalcut.webp'
import google from '../images/logos/google.svg'

export default function Skills(){
  return(
    <div>
      <Title head='Skills' highlight='Day 1 Mentality'/>
      <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 mx-4'>
        <div className='bg-[#CEC7C8] p-5'>
          <h1 className='text-xl mb-3'>Certification</h1>
          <ul className='list-disc ml-4 font-serif text-lg'>
            <li>
              <Link 
                href='https://aws.amazon.com/verification'
                text='AWS Certified Solutions Architect Associate'
              />
              <p> Credential ID : LC7PGJC2Z1QE1Q3V </p>
            </li>
            <li>
              <Link 
                href='https://coursera.org/share/6bfcfad9c15bb0e1a75c3153bf3b7487'
                text='IBM Applied AI Professional Certificate'
              />
            </li>
          </ul>
          <p className='flex h-16 mt-5'>
            <img src={AWSCert} alt='AWS' className=''/>
            <img src={IBM} alt='IBM' className=''/>
          </p>
        </div>
        <div className='bg-[#CEC7C8] p-5'>
          <h1 className='text-xl font-bold mb-3'>Core</h1>
          <p className='font-serif text-lg'>
            Python, C++, AWS, JavaScript, TypeScript, Git, Docker, Linux
          </p>
          <p className='flex flex-wrap mt-10'>
            <img src={python} alt='python' className='h-10 m-1'/>
            <img src={cpp} alt='cpp' className='h-10 m-1'/>
            <img src={aws} alt='aws' className='h-10 m-1'/>
            <img src={js} alt='js' className='h-10 m-1'/>
            <img src={ts} alt='ts' className='h-10 m-1'/>
            <img src={git} alt='git' className='h-10 m-1'/>
            <img src={docker} alt='docker' className='h-10 m-1'/>
            <img src={linux} alt='linux' className='h-10 m-1'/>
          </p>
        </div>
        <div className='bg-[#CEC7C8] p-5'>
          <h1 className='text-xl font-bold mb-3'>AI and Data Science</h1>
          <p className='font-serif text-lg'>
            Jupyter Notebook, Numpy, Pandas, Scikit Learn, PyTorch, TensorFlow, OpenCV
          </p>
          <p className='flex flex-wrap mt-10'>
            <img src={jptr} alt='jptr' className='h-10 m-1'/>
            <img src={numpy} alt='numpy' className='h-10 m-1'/>
            <img src={pandas} alt='pandas' className='h-10 m-1'/>
            <img src={scikit} alt='scikit' className='h-10 m-1'/>
            <img src={torch} alt='torch' className='h-10 m-1'/>
            <img src={tf} alt='tf' className='h-10 m-1'/>
            <img src={opencv} alt='opencv' className='h-10 m-1'/>
          </p>
        </div>
        <div className='bg-[#CEC7C8] p-5'>
          <h1 className='text-xl font-bold mb-3'>Web Development</h1>
          <p className='font-serif text-lg'>
            HTML, CSS, ReactJS, GatsbyJS, NextJS, PostgreSQL, NodeJS, ExpressJS
          </p>
          <p className='flex flex-wrap mt-10'>
            <img src={html} alt='html' className='h-10 m-1'/>
            <img src={css} alt='css' className='h-10 m-1'/>
            <img src={reactJS} alt='react' className='h-10 m-1'/>
            <img src={gatsby} alt='gatsby' className='h-10 m-1'/>
            <img src={next} alt='next' className='h-10 m-1'/>
            <img src={psql} alt='psql' className='h-10 m-1'/>
            <img src={node} alt='node' className='h-10 m-1'/>
            <img src={express} alt='express' className='h-10 m-1'/>
          </p>
        </div>
        <div className='bg-[#CEC7C8] p-5'>
          <h1 className='text-xl font-bold mb-3'>Languages</h1>
          <ul className='list-disc ml-4 font-serif text-lg'>
            <li>
              English (Professional to Native)
            </li>
            <li>
              Bahasa Indonesia (Native)
            </li>
            <li>
              Mandarin (HSK 3)
            </li>
            <li>
              Cantonese (Basic)
            </li>
          </ul>
        </div>
        <div className='bg-[#CEC7C8] p-5'>
          <h1 className='text-xl font-bold mb-3'>Other Software</h1>
          <p className='font-serif text-lg'>
            Microsoft 365, Google Workspace, Photoshop, Pixelmator Pro, Final Cut Pro
          </p>
          <p className='flex flex-wrap mt-10'>
            <img src={m365} alt='365' className='h-10 m-1'/>
            <img src={google} alt='google' className='h-10 m-1'/>
            <img src={ps} alt='ps' className='h-10 m-1'/>
            <img src={pixel} alt='pixelmator' className='h-10 m-1'/>
            <img src={finalcut} alt='finalcut' className='h-10 m-1'/>
          </p>
        </div>
        <div className='bg-[#CEC7C8] p-5'>
          <h1 className='text-xl font-bold mb-3'>Project Management</h1>
          <p className='font-serif text-lg'>
            I usually work on my project using Agile Methodology
          </p>
          <p className='flex flex-wrap mt-10'>
            <img src={conflu} alt='confluance' className='h-10 m-1'/>
            <img src={jira} alt='jira' className='h-10 m-1'/>
            <img src={clickup} alt='clickup' className='h-10 m-1'/>
          </p>
        </div>
        <div className='bg-[#CEC7C8] p-5'>
          <h1 className='text-xl font-bold mb-3'>Interest</h1>
          <p className='font-serif text-lg'>
            Cybersecurity, Crypto, Blockchain, Cloud Computing, Stock Market, Traveling, Cooking
          </p>
        </div>
      </div>
    </div>
  )
}