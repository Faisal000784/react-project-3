import about from "./images/about.jpg";

function About() {
  return (
    <div className="bg-gray-100 h-[100vh] w-full pt-12">
      <div className="flex pt-14">
        <div>
          <img
            src={about}
            alt=""
            className="w-[40.75rem] h-[30rem] rounded-lg"
          />
        </div>
        <div className="flex flex-col pl-[3rem] w-[41rem] pt-11">
            <h2 className='text-xl'>ABOUT</h2>
          <h1 className="text-5xl font-serif font-medium leading-[3.5rem] text-blue-900">
          Glad To Welcome You
          </h1>
          <p className="text-lg font-serif pt-6 text-gray-600">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>

          <button className='p-4 shadow-lg w-[14rem] mt-7 border-black text-black border-2 rounded-md hover:bg-black hover:text-white '>Learn About Us </button>
         
        </div>
      </div>
    </div>
  );
}
export default About;
