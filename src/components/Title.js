export default function Title({head, highlight}){
  return (
    <div className='mt-20 mb-10 mx-4 text-center'>
      <h2 className='tracking-widest font-extralight uppercase'>{head}</h2> 
      <h1 className='font-medium lg:text-4xl text-3xl mt-8 mb-5'>{highlight}</h1>
    </div>
  );
}