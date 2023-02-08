export default function ExperienceCard({date, company, title, children}){
  return(
    <div className='my-5'>
      <h2 className='uppercase text-md'>{date}</h2> 
      <h1 className='font-medium text-3xl mt-3 my-2'>{company}</h1>
      <p className='font-serif text-light text-xl mb-3'>{title}</p>
      <ul className='list-disc ml-4 font-serif text-lg'>
        {children}
      </ul>
    </div>
  )
}