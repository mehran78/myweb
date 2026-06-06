import Card from "./Card";

function Cards() {
  return (
    // <div className="flex justify-center">
    <div className="flex justify-center items-center gap-3 flex-col px-12 sm:px-24 md:flex-row md:px-12">
      <Card text={"Buy & Sell in CDA Sectors"} />
      <Card text={"Park View City Installments"} />
      <Card text={"Market Analysis and Evaluation"} />
    </div>
  );
}

export default Cards;
