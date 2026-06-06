import Card from "./Card";

function Cards() {
  return (
    <div className="flex flex-col px-4 gap-3 sm:px-8 sm:gap-6 md:px-12 md:gap-6 md:max-w-[70dvw] lg:px-4 lg:gap-3">
      <Card
        text={
          "      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit molestiae libero harum officiis dicta, repudiandae vitae nemo eveniet cupidi"
        }
        writer={"Ali Hussain"}
      />

      <Card
        text={
          "      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit molestiae libero harum officiis dicta, repudiandae vitae nemo eveniet cupidi"
        }
        writer={"Ali Hussain"}
      />
    </div>
  );
}

export default Cards;
