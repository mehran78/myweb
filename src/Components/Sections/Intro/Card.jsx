import LogoIcon from "../../Navbar/LogoIcon";
// import first from "../../../Images/1.png";

function Card({ text }) {
  return (
    <div className="bg-white md:min-w-[40dvh] w-full md:w-auto py-4 rounded-md shadow-xl mx-0 flex custom-card-flex md:px-4">
      <LogoIcon />
      {/* <img src={first} /> */}
      <p className="text-[1rem] lg:text-[1.1rem] text-center text-[#585858] font-[500]">
        {text}
      </p>
    </div>
  );
}

export default Card;
