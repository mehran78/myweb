import Card from "./Card";
import image1 from "../../../Images/hero-1.jpg";
import image2 from "../../../Images/hero-2.jpg";
import image3 from "../../../Images/hero-4.jpg";

function Cards() {
  return (
    // <div className="flex justify-center items-center gap-3 flex-col bg-red-300">
    <div className="flex justify-center items-center gap-3 flex-col px-12 sm:px-24 md:flex-row md:px-12">
      <Card
        text={"Sector F6 ISB"}
        range={"230M PKR - 800M PKR"}
        cardImage={image1}
      />
      <Card
        text={"Sector E7 ISB"}
        range={"250M PKR - 800M PKR"}
        cardImage={image1}
      />
      <Card
        text={"F-7 Sector"}
        range={"240M PKR - 800M PKR"}
        cardImage={image2}
      />
      <Card
        text={"F8  Sector"}
        range={"220M PKR - 700M PKR"}
        cardImage={image3}
      />
    </div>
  );
}

export default Cards;
