import logo from './images/log-black.png'


function Nav () {
    return (
        <nav className='nav w-full bg-white shadow-md h-20 flex justify-between px-11 items-center fixed z-50'>
            <div>
            <img src={logo} alt="" className='h-12 w-30' />

            </div>
            <div className='flex text-xl justify-evenly w-[50%]'>
            <h2>About</h2>
            <h2>Events</h2>
            <h2>Sermons</h2>
           
            <h2>Contact</h2>

            </div>
            



        </nav>

    )
}

export default Nav