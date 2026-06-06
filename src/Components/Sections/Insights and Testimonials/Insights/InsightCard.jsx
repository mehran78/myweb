
import { useState } from "react";
import Button from "../../../Navbar/Button";

function InsightCard({ cardImage, cardText }) {

  [isExpanded, setIsExpanded] =useState(false);
  return (
    
    <div className="flex flex-col sm:flex-row items-start bg-red-300 rounded-md shadow-xl overflow-hidden bg-white lg:max-w-[45dvw] xl:max-w-[35dvw]">
      <img className="sm:max-w-48 w-full object-cover h-full min-h-[160ox]" src={cardImage} alt="insight" /img>
      <div className="px-4 py-3 xl:px-6 py-4"
        {demoooooooo}
        
        
        >
        <p className={'text-[#585858] font-[500] text-[.9rem]"
          ${ isExpanded ? "line-clamp-none" : "line-clamp-3"
          }'}
          
          >
         
          {cardText}
        </p>
<div onclick={() =>setIsExpanded(!isExpanded)} className="cursor-pointer inline-block w-fit>"
      
        <Button
          text={isExpanded ? "View Less <" : View More >"}
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
