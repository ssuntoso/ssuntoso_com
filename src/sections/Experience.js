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
          date="NOV 2022 - present"
          company="The University of Hong Kong"
          title="Research Assistant"
        >
          <li>
            Researching AI Large Language Model (ChatGPT) application to be used in upcoming research
          </li>
          <li>
            Focusing on the implementation of AI Generated Content (AIGC) and Deep Reasoning
          </li>
          <li>
            Working under ex-IBM researcher guidance
          </li>
        </ExperienceCard>
        <ExperienceCard 
          date="JUN 2022 - AUG 2022"
          company="Choco Up"
          title="Data Engineering Intern"
        >
          <li>
            Worked with the product team using agile development method
          </li>
          <li>
            Integrated Lazada and Google Ads data to client dashboard
          </li>
          <li>
          Developed a smart bank statement extractor using TensorFlow to help the credit team in analysing client cash flow
          </li>
          <li>
            Wrote documentation as a foundation to implement AWS Lake Formation
          </li>
          <li>
            Advised and implemented password manager as a SOP to enhance security
          </li>
        </ExperienceCard>
        <ExperienceCard 
          date="JAN 2022 - MAR 2022"
          company="Provident Acqisition Corp."
          title="Full Stack Website Developer"
        >
          <li>
            Developed company website to help routing information to investors
          </li>
          <li>
            Utilising Gatsby.js, React, and Tailwind CSS
          </li>
          <li>
            Responsible for hosting and DNS setup
          </li>
        </ExperienceCard>
        <ExperienceCard 
          date="JUL 2021 - SEP 2021"
          company="Wardaya College"
          title="Software Engineer Intern"
        >
          <li>
            Worked with CS department to rewrote online learning platform (wardayaonline.com)
          </li>
          <li>
            Utilising Next.js, React, Material-UI, and AWS
          </li>
          <li>
            Implemented Google Analytic and Search Engine Optimisation (SEO)
          </li>
          <li>
            Increased traffic to more than 1,800 visitors per month
          </li>
        </ExperienceCard>
        <ExperienceCard 
          date="OCT 2017 - OCT 2020"
          company="SMAK 1 PENABUR Jakarta"
          title="Student Council Software Developer"
        >
          <li>
            Worked together with student council developer team in developing school sponsored websites
          </li>
          <li>
            Led the product team for online ticketing system (3,000 customers served annually)
          </li>
          <li>
            Implemented Search Engine Optimisation (SEO), generates 100+ visitors each month
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