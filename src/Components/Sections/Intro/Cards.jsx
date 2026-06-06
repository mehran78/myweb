import Card from "./Card";

function Cards() {
  return (
    <div className="flex justify-center items-center gap-3 flex-col px-12 sm:px-24 md:flex-row md:px-12">
      <Card text={"5+ Years Experience"} />
      <Card text={"ROI Focused Guidance"} />
      <Card text={"Trusted and Transparent"} />
    </div>
  );
}

export default Cards;
