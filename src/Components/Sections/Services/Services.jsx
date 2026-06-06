import Heading from "../Heading";
import Cards from "./Cards";

function Services() {
  return (
    <div id="services" className="bg--300 py-8 custom-section block">
      <Heading text={"My Services"} />
      <Cards />
    </div>
  );
}

export default Services;
