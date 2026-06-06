// import Insights from "./Insights/Insights";
// import Testimonials from "./Testimonials/Testimonials";

// function Parent() {
//   return (
//     <div className="flex flex-col justify-center items-center lg:items-start gap-4 lg:flex-row mb-16 i_and_t">
//       <Insights />
//       <Testimonials />
//     </div>
//   );
// }

// export default Parent;
import Insights from "./Insights/Insights";
import Testimonials from "./Testimonials/Testimonials";
import bgImage from "../../../Images/iandt.jpg";

function Parent() {
  return (
    <div
      id="insights"
      className="relative overflow-hidden flex flex-col justify-center items-center lg:items-start gap-4 lg:flex-row pb-16"
    >
      {/* Background Image */}
      <img
        src={bgImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover blur-m scale-110 -z-20"
      />

      {/* Gradient Overlay (BOTTOM-RIGHT visible) */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/100 via-white/70 to-transparent -z-10"></div>

      <Insights />
      <Testimonials />
    </div>
  );
}

export default Parent;
