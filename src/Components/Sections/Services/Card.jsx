import LogoIcon from "../../Navbar/LogoIcon";

function Card({ text }) {
  return (
    // <div className="bg-white text-[#585858] py-4 w-[40dvh] rounded-md shadow-xl mx-6 flex custom-card-flex">
    <div className="bg-white md:min-w-[40dvh] w-full md:w-auto py-4 rounded-md shadow-xl mx-0 flex custom-card-flex md:px-4">
      <LogoIcon />
      {/* <p className="text-[1.1rem] font-[500]"> */}
      <p className="text-[1rem] lg:text-[1.1rem] text-center text-[#585858] font-[500]">
        {text}
      </p>
    </div>
  );
}

export default Card;
