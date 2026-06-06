import Button from "../../../Navbar/Button";

function InsightCard({ cardImage, cardtext }) {
  return (
    <div className="flex flex-col sm:flex-row bg-red-300 rounded-md shadow-xl overflow-hidden bg-white lg:max-w-[45dvw] xl:max-w-[35dvw]">
      <img className="sm:max-w-48 w-full" src={cardImage}></img>
      <div className="px-4 py-3 xl:px-6 py-4">
        <p className="text-[#585858] font-[500] text-[.9rem]">
         
          {cardtext}
        </p>
        <Button
          text="View More >"
          bgc="transparent"
          color="#AE7F4A"
          fontSize=".9rem"
          padx="0"
          extraClasses="font-[500]"
        />
      </div>
    </div>
  );
}

export default InsightCard;
