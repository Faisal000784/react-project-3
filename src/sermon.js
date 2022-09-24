import sermon from './images/sermon.jpg';


function Sermons () {
    return (
        <div className=' pt-20 bg-gray-100 h-[120vh]'>
            <div>
            <img src={sermon} alt="" className='w-[50%] h-[100vh] -z-10' />
            <div className="bg-green-900 w-[60%] h-[70vh] mt-[-34.5rem] ml-[33.5rem] z-40 flex flex-col text-white pl-[11rem] pt-[5rem] font-serif">
      <h2 className='text-xl'>OUR VOICE</h2>
      <h1 className='text-4xl pt-3'>Last Sermons</h1>
      <p className='w-[28rem] pt-3 font-sans'>
        Capitalize on low hanging fruit to identify a ballpark value added
        activity to beta test. Override the digital divide with additional
        clickthroughs from DevOps.
      </p>
      <button className='border-2 border-white py-3 w-[15rem] mt-10 rounded-md hover:bg-white hover:text-black'>Watch Last Sermon</button>
    </div>

            </div>
           

         
        </div>

    )
}
export default Sermons