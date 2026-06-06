import InsightCard from "./InsightCard";
import image1 from "../../../../Images/stat-3.jpg";
import image2 from "../../../../Images/stat-4.jpg";

function Cards() {
  return (
    <div className="flex flex-col justify-center px-4 gap-3 sm:px-8 sm:gap-6 md:px-12 md:gap-6 md:max-w-[70dvw] lg:px-4 lg:gap-3">
      <InsightCard cardImage={image1}
        cardText ="skip the middle man ."
        />
      <InsightCard cardImage={image2}
        cardText ="demmo one two three"/>
    </div>
  );
}

export default Cards;
