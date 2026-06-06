import { useState } from "react";
import Button from "../../../Navbar/Button";

function InsightCard({ cardImage, cardText }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row items-start bg-red-300 rounded-md shadow-xl overflow-hidden bg-white lg:max-w-[45vw] xl:max-w-[45vw]">
      <img className="sm:max-w-48 w-full object-cover h-full min-h-[160px]" src={cardImage} alt="Insight" />
      
      <div className="px-4 py-3 xl:px-6 py-4">
        <p className={`text-[#585858] font-[500] text-[.9rem] ${isExpanded ? "line-clamp-none" : "line-clamp-3"}`}>
          {cardText}
        </p>

        <div onClick={() => setIsExpanded(!isExpanded)} className="cursor-pointer inline-block w-fit mt-2">
          <Button
            text={isExpanded ? "View Less <" : "View More >"}
            bgc="transparent"
            color="#AE7F4A"
            fontSize=".9rem"
            padx="0"
            extraClasses="font-[500]"
          />
        </div>
      </div>
    </div>
  );
}

export default InsightCard;
