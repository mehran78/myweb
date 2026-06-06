import Card from "./Card";

function Cards() {
  return (
    // <div className="flex justify-center">
    <div className="flex justify-center items-center gap-3 flex-col px-12 sm:px-24 md:flex-row md:px-12">
      <Card text={"Buy & Sell in CDA Sectors"} />
      <Card text={" Residentail & Commercial "} />
      <Card text={"Market Analysis and Evaluation"} />
       <Card text={"  Rentals Management"}/>
    </div>
  );
}

export default Cards;
