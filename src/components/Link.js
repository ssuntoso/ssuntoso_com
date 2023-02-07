export default function Link({href, text}){
  return(
    <a href={href} className='font-serif underline hover:no-underline hover:cursor-pointer text-gray-500 text-lg' target='_blank' rel="noreferrer">
      {text}
    </a>
  )
}