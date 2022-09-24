import header from "./images/header1.jpg";

function Header() {
  return (


    <div className="bg-gray-100">
      <div>
        <img src={header} alt="" className="z-[-20rem]" />
        <div className="heading mt-[-30rem] text-white flex flex-col h-[30rem] w-[65rem] ml-[10rem]">
 
          <h1 className="text-[3.7rem] font-bold mt-[6rem] font-serif ml-[18rem]">God Bless You <br/> and Welcome</h1>
        
  
        </div>
      </div>

      <div className='bg-white shadow-xl w-[50rem] h-[35vh] ml-[17rem] mt-[1rem] z-50 important rounded-lg'>
        <div className='bg-green-800 h-20 w-20 rounded-full ml-[22rem] mt-[1rem]'>
        <i class="fa-solid fa-church pl-5 text-white text-3xl pt-4 "></i>
       
    

        </div>
        <p className='w-[40rem] text-center pl-32 text-2xl mt-9'>We’ll help you to live generously and healthy relationships. Connect with others to grows and excellence in all things.

</p>

      </div>
    </div>
  );
}

export default Header;
