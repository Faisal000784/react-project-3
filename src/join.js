import join from "./images/join.jpg";

function Join() {
  return (
    <div className="bg-gray-100 h-[90vh] w-full">
      <div className="flex pt-14">
        <div>
          <img
            src={join}
            alt=""
            className="w-[42rem] h-[30rem] rounded-lg ml-[42rem]"
          />
        </div>
        <div className="flex flex-col ml-[-80.2rem] w-[33rem] pt-11">
          <h1 className="text-xl font-serif font-medium text-green-700 ">
            WE ARE NEAR
          </h1>
          <h1 className="font-semibold leading-[3.5rem]  text-5xl font-serif ">
            Get Connected
          </h1>
          <p className="text-lg font-serif pt-6 text-gray-600">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs from DevOps.
          </p>
          <div className='flex'>
          <button className='px-6 py-4  border-black text-black border-2 shadow-lg w-[11rem] mt-7 rounded-md  text-xl hover:bg-black hover:text-white'>Join Us </button>
          <button className='px-6 py-4 bg-green-900 shadow-lg w-[11rem] mt-7 rounded-md text-white text-xl ml-7 hover:bg-black'>Our Events </button>

          </div>
          

        </div>
      </div>
    </div>
  );
}
export default Join;
