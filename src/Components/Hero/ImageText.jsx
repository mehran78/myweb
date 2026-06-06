// #17294A
import Button from "../Navbar/Button";

function ImageText() {
  return (
    <div className="absolute top-8 left-8 sm:top-12 sm:left-12 md:top-14 md:left-14 lg:top-16 lg:left-16 text-[#dedede]">
      <h1 className="text-[1.8rem] sm:text-[2rem] md:text-4xl lg:text-5xl font-semibold pr-2">
        Invest Smart. Invest in Islamabad's<br></br> Prime Properties.
      </h1>
      <h2 className="text-lg sm:text-xl lg:text-2xl my-4 sm:my-6 sm:mb-8 md:my-8 lg:my-10 font-semibold pr-2">
        Real EstateAdvisory in CDA Sectors & Park View City.
      </h2>
      <Button
        text={"View Properties"}
        extraClasses={"custom-hero-button"}
        bgc={"#AE7F4A"}
      />
      <Button
        text={"Schedule Consultation"}
        extraClasses={"custom-hero-button"}
        bgc={"#14264A"}
      />
    </div>
  );
}

export default ImageText;
