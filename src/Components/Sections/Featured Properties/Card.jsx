function Card({ text, range, cardImage }) {
  return (
    // <div className="bg-white w-[40dvh] pb-4 rounded-md custom-hidden-overflow shadow-xl mx-6 flex custom-card-flex">
    <div className="bg-white md:min-w-[40dvh] w-full md:w-auto pb-4 rounded-md overflow-hidden shadow-xl mx-0 flex custom-card-flex md:px- md:max-w-[40dvh]">
      <img
        src={cardImage}
        className="block max-w-[100%] max-h-44 w-[100%] bg-top-left mb-4"
      />
      <p className="text-[1.1rem]  text-[#585858] font-[500] px-6 block w-[100%] custom-left-textalign">
        {text}
      </p>
      <p className="custom-left-textalign w-[100%] px-6 font-[500] custom-gray-text text-[1rem]">
        {range}
      </p>
    </div>
  );
}

export default Card;
