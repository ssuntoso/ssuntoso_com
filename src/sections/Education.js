import React from 'react';
import Title from '../components/Title'
import ExperienceCard from '../components/ExperienceCard'

export default function Education(){
  return(
    <div>
      <Title head='Education' highlight='Come From A Humble Beginnings'/>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 mx-4'>
        <div>
          <ExperienceCard 
            date="SEP 2020 - JAN 2025 (Expected)"
            company="The University of Hong Kong"
            title="Bachelor of Arts and Sciences in Applied Artificial Intelligence - BASc(Applied AI)"
          >
            <li>
              Major in Applied Artificial Intelligence with focus in technology 
            </li>
            <li>
              Minor in Finance
            </li>
            <li>
              HKU Foundation Entrance Scholarship awardee (Full Tuition + Accommodation allowance)
            </li>
          </ExperienceCard>
        </div>
        <div>
          <ExperienceCard 
            date="JUL 2017 - JUN 2020"
            company="SMAK 1 PENABUR Jakarta"
            title="High School Diploma"
          >
            <li>
              Focus on Math and Science
            </li>
          </ExperienceCard>
        </div>
      </div>
    </div>
  )
}