import Card from "./Card";
import image1 from "../../../Images/hero-1.jpg";
import image2 from "../../../Images/hero-2.jpg";
import image3 from "../../../Images/hero-4.jpg";

function Cards() {
  return (
    // <div className="flex justify-center items-center gap-3 flex-col bg-red-300">
    <div className="flex justify-center items-center gap-3 flex-col px-12 sm:px-24 md:flex-row md:px-12">
      <Card
        text={"Park View City"}
        range={"$120,000 - $250,000"}
        cardImage={image1}
      />
      <Card
        text={"F-11 Sector"}
        range={"$200,000 - $400,000"}
        cardImage={image2}
      />
      <Card
        text={"G-10 Sector"}
        range={"$300,000 - $503,000"}
        cardImage={image3}
      />
    </div>
  );
}

export default Cards;
