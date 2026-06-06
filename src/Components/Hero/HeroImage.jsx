// import hero from "../../Images/hero-1.jpg";

// function HeroImage() {
//   return (
//     <div className="h-[60dvh] w-[100%]">
//       <img
//         src={hero}
//         className="object-cover h-[100%] w-[100%] custom-image"
//       ></img>
//     </div>
//   );
// }

// export default HeroImage;

import hero from "../../Images/hero-1.jpg";

function HeroImage() {
  return (
    <div className="relative h-[60dvh] w-full overflow-hidden">
      {/* Image */}
      <img
        src={hero}
        className="object-cover h-full w-full custom-image"
        alt=""
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-black/10 to-transparent"></div>
    </div>
  );
}

export default HeroImage;
