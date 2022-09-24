import logo from './images/logo.png'


function Footer () {
    return (
        <div className='bg-green-900 h-[55vh] '>
            <div className='flex pt-28 pl-11 justify-between px-11' >
                <div className='flex flex-col '>
                    <img src={logo} alt="" className='w-56 h-12' />
                   <div className='flex text-white text-xl pt-4'>
                    <h2 >About</h2>
                    <h2 className='pl-5'>Event</h2>
                    <h2 className='pl-5'>Sermon</h2>
                    <h2 className='pl-5'>Contact</h2>


                   </div>
                   <div className="social text-white mt-7 text-2xl">
            <i class="fas fa-brands fa-facebook-f pl-1"></i>
            <i class="fas fa-brands fa-instagram pl-6"></i>
            <i class="fas fa-brands fa-twitter pl-6"></i>
            <i class="fas fa-brands fa-youtube pl-6"></i>
          </div>

          

                </div>
                <div className='flex flex-col mt-1'>
            <h1 className='text-xl text-white'>Subscribe For Geting Email Updates</h1>
            <div className='flex mt-6'>
            <input type="Email" placeholder='Email'  className='w-[17rem] border-2 border-white bg-none h-[3rem]'/>
            <button className=' py-2 px-6 ml-1 border-2 border-white'>Subscribe</button>

            </div>
         

          </div>
            </div>

            <p className='flex text-orange-600 justify-center mt-4'>© Impreza Theme<span className='text-white'> by UpSolution | </span> Privacy Policy</p>

        </div>
    )
}

export default Footer