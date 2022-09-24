import contact from "./images/contact.jpg";

function Contact() {
  return (
    <div className="h-[102vh] bg-gray-100">
      <div className="pt-[4rem]">
        <div className="flex flex-col bg-white shadow-xl rounded-lg w-[50%] h-[90vh] ml-9 pt-[9.5rem] pl-[6rem]">
          <h2 className='text-xl'>WE IN TOUCH</h2>
          <h1 className='text-4xl font-serif font-medium mt-3'>Have Any Questions?</h1>
          <p className='w-[31rem] pt-4 text-lg'>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>
          <button className='p-4 shadow-lg w-[14rem] mt-7 border-black text-black border-2 rounded-md hover:bg-black hover:text-white  mt-12'>Learn About Us </button>

        </div>
        <img
          src={contact}
          alt=""
          className="h-[90vh] w-[46%] ml-[43.4rem] mt-[-37rem] rounded-lg"
        />
      </div>
    </div>
  );
}

export default Contact;
