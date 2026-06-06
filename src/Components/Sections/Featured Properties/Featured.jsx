import Button from "../../Navbar/Button";
import Heading from "../Heading";
import Cards from "./Cards";

function Featured() {
  return (
    <div id="featured" className="bg--300 py-8 custom-section block">
      <Heading text={"Featured Properties"} />
      <Cards />
      <span className="block w-[100%] flex items-center justify-center my-6">
        <Button text={"View More"} padx={"40px"} bgc={"#14264A"} />
      </span>
    </div>
  );
}

export default Featured;
