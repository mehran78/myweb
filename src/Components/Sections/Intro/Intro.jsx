import Heading from "../Heading";
import Cards from "./Cards";

function Intro() {
  return (
    <div id="intro" className="bg--300 py-8 custom-section block">
      <Heading text={"Why Choose Me?"} />
      <Cards />
    </div>
  );
}

export default Intro;
