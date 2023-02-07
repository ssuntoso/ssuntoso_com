import React from 'react';
import Title from '../components/Title'
import ExperienceCard from '../components/ExperienceCard'
import Link from '../components/Link'

export default function Experience(){
  return(
    <div>
      <Title head='Experience' highlight='Years of Track Record'/>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 mx-4'>
        <ExperienceCard 
          date="JUN 2022 - AUG 2022"
          company="Choco Up"
          title="Data Engineering Intern"
        >
          <li>
            Integrate Lazada and Google Ads data into a single dashboard
          </li>
          <li>
            Develop smart bank statement extractor using TensorFlow
          </li>
          <li>
            Write documentation as a guideline to use AWS Lake Formation
          </li>
          <li>
            Advising and implement password manager as SOP to enhance security
          </li>
        </ExperienceCard>
        <ExperienceCard 
          date="JAN 2022 - MAR 2022"
          company="Provident Acqisition Corp."
          title="Full Stack Website Developer"
        >
          <li>
            Develop company website
          </li>
          <li>
            Utilizing Gatsby.js, React, and Tailwind CSS
          </li>
          <li>
            Responsible for hosting and DNS setup using Netlify
          </li>
        </ExperienceCard>
        <ExperienceCard 
          date="JUL 2021 - SEP 2021"
          company="Wardaya College"
          title="Software Engineer Intern"
        >
          <li>
            Rewrite and continue wardayaonline.com online learning platform development
          </li>
          <li>
            Increased traffic to more than 1,800 visitors per month
          </li>
          <li>
            Utilizing Next.js, React, Material-UI, and AWS
          </li>
          <li>
            Implement Google Analytic and Search Engine Optimization (SEO)
          </li>
        </ExperienceCard>
        <ExperienceCard 
          date="OCT 2017 - OCT 2020"
          company="SMAK 1 PENABUR Jakarta"
          title="Student Council Software Developer"
        >
          <li>
            Develop school sponsored website
          </li>
          <li>
            Lead product team for online ticketing system (3,000 customers served annually)
          </li>
          <li>
            Utilizing Gatsby.js, Bootstrap, Google AMP, Tailwind CSS
          </li>
          <li>
            Implement Search Engine Optimization (SEO), generates 100+ visitors each month
          </li>
        </ExperienceCard>
      </div>
      <div className='text-center mt-5'>
        <Link
          href='https://www.linkedin.com/in/ssuntoso/'
          text='View Linkedin'
        />
      </div>
    </div>
  )
}