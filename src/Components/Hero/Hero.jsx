import HeroImage from "./HeroImage";
import ImageText from "./ImageText";

function Hero({ setIsOpen, blur }) {
  return (
    <div
      className={`relative ${blur} transition-all duration-600`}
      onClick={() => setIsOpen(false)}
    >
      <HeroImage />
      <ImageText />
    </div>
  );
}

export default Hero;
