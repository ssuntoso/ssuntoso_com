import React from 'react';
import Title from '../components/Title'
import ExperienceCard from '../components/ExperienceCard'

export default function Organisations(){
  return(
    <div>
      <Title head='Organisations' highlight='Together We Are Stronger'/>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 mx-4'>
        <ExperienceCard 
          date="AUG 2020 - present"
          company="CodeOne"
          title="Founder"
        >
          <li>
            Introducing tech industry to senior high school students
          </li>
          <li>
            Help apply their knowledge to build functional application
          </li>
        </ExperienceCard>
        <ExperienceCard 
          date="NOV 2015 - JUL 2020"
          company="The Duke of Edinburgh’s International Award (DofEIA)"
          title="Gold, Silver, and Bronze Standard Awardee"
        >
          <li>
            Doing weekly self-development activity, sports, and volunteering
          </li>
          <li>
            Taught English to local Indonesian children, creating early exposure for their future
          </li>
        </ExperienceCard>
        <ExperienceCard 
          date="Dec 2020 - JUN 2021"
          company="Shun Hing College Media Team"
          title="Social Media Team Member"
        >
          <li>
            Responsible for the creation and management of Shun Hing College social media content. Reached more than 650 active followers with robust engagement rate on Instagram within 4 months
          </li>
          <li>
            Collaborate with other team members in the production of poetry month event, focusing on video editing
          </li>
        </ExperienceCard>
        <ExperienceCard 
          date="OCT 2017 - JAN 2020"
          company="SMAK 1 PENABUR Jakarta Student Council"
          title="Coordinator of Development in Information Technologies and Communication"
        >
          <li>
            Led the development of an online ticketing channel for school events that has generated over 3000 online ticket sales, making SMAK 1 one of the first schools in Indonesia that has a proprietary online ticketing channel for their school events
          </li>
          <li>
            Developed and maintained the official school website (smakone.org) and social media
          </li>
        </ExperienceCard>
        <ExperienceCard 
          date="OCT 2018 - OCT 2019"
          company="Smakonecup 2018 (GENESIS) and 2019 (FANTASIA) Crew"
          title="Coordinator of Web Division"
        >
          <li>
            Developed and designed the front-end of cup.smakone.org and soundscape.id using Google AMP
          </li>
          <li>
            Led a team of developers and graphic designers to support the event I.T system
          </li>
        </ExperienceCard>
        <ExperienceCard 
          date="AUG 2017 - SEP 2019"
          company="Pramuka (Boys Scout)"
          title="President of SMAK 1 Boys Scout Crew"
        >
          <li>
            Elected as the leader of SMAK 1 Boys Crew. Several intra-school activities that were organized successfully under my leadership are: Leadership Camp, Social Responsibility Project and Volunteering
          </li>
          <li>
            Developed and maintained the official school website (smakone.org) and social media
          </li>
        </ExperienceCard>
      </div>
    </div>
  )
}