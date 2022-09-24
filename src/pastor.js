import pastor from './images/pastor.jpg';
import pastor2 from './images/pastor2.jpg';
import pastor3 from './images/pastor3.jpg';



function Pastor() {
  return (
    <div className="bg-gray-100 pt-16 h-[75vh]">
      <div className="flex">
        <div className=" flex flex-col w-[26rem] h-[23rem] bg-green-900 ml-11 rounded-md pl-9">
          <i class="fa-solid fa-church  text-white text-6xl pt-10 "></i>

          <h1 className='text-4xl font-serif text-white pt-6'>Pastors / Staff</h1>
          <p className='w-[20rem] text-white pt-4 text-xl'>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative.
          </p>
        </div>

        <div className=" flex flex-col w-[13rem] h-[21rem] ml-16 text-center ">
            <img src={pastor3} alt="" className='h-[13rem] w-[13rem] rounded-full' />
         
          <h1 className='text-xl font-medium pt-2'>Michael Monroe</h1>

         
          <h5 className='text-sm text-gray-600'>Founder Pastor</h5>
          <p className='w-[13rem] pt-2 text-md text-center ' >
          Leverage agile frameworks to provide a robust synopsis for high level overviews.
          </p>
        </div>

        <div className=" flex flex-col w-[13rem] h-[21rem] ml-16 text-center ">
            <img src={pastor2} alt="" className='h-[13rem] w-[13rem] rounded-full' />
         
          <h1 className='text-xl font-medium pt-2'>Jason Moore</h1>

         
          <h5 className='text-sm text-gray-600'>Founder Pastor</h5>
          <p className='w-[13rem] pt-2 text-md text-center ' >
          Leverage agile frameworks to provide a robust synopsis for high level overviews.
          </p>
        </div>


        <div className=" flex flex-col w-[13rem] h-[21rem] ml-16 text-center ">
            <img src={pastor} alt="" className='h-[13rem] w-[13rem] rounded-full' />
         
          <h1 className='text-xl font-medium pt-2'>Nadin Simson</h1>

         
          <h5 className='text-sm text-gray-600'>Volunteer</h5>
          <p className='w-[13rem] pt-2 text-md text-center ' >
          Leverage agile frameworks to provide a robust synopsis for high level overviews.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Pastor;
