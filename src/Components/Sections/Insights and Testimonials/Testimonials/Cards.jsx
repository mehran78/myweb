import Card from "./Card";

function Cards() {
  return (
    <div className="flex flex-col px-4 gap-3 sm:px-8 sm:gap-6 md:px-12 md:gap-6 md:max-w-[70dvw] lg:px-4 lg:gap-3">
      <Card
        text={
`Their data on CDA market valuations was completely accurate, the legal verification was watertight, and the closing happened faster than I expected. They are my go-to team for capital restructuring in Islamabad."
 `}
        writer={"Dr Faisal"}
      />

      <Card
        text={
`Finding a premium, secure residential stay in a new city can be challenging. I needed a high-end luxury apartment in Islamabad that offered both top-tier security and a convenient commute to our corporate headquarters.They bypass the usual market noise and provide only 100% verified, possession-ready properties. From the transparent contract terms to the efficient handling of expat documentation, their team handled everything with absolute professionalism. Highly recommended for any international professional moving to the capital`}
        writer={"Mr Kim"}
      />
    </div>
  );
}

export default Cards;
