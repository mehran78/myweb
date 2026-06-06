import Button from "../../../Navbar/Button";

function Card({ text, writer }) {
  return (
    <div className="bg-white rounded-md shadow-xl overflow-hidden px-6 py-6 lg:max-w-[35dvw] xl:max-w-[35dvw]">
      <p className="text-[#585858] font-[500] text-[.9rem]">{text}</p>
      <span style={{ textAlign: "right" }} className="block font-semibold">
        - {writer}
      </span>
    </div>
  );
}

export default Card;
