// // #112044 logo text
// // #555356 navbar tabs
// // #AE7F4A navbar button

import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Featured from "./Components/Sections/Featured Properties/Featured";
import Parent from "./Components/Sections/Insights and Testimonials/Parent";
import Intro from "./Components/Sections/Intro/Intro";
import Services from "./Components/Sections/Services/Services";
import hero from "./Images/hero-1.jpg";

// function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   function handleNavbarDisplay() {
//     setIsOpen((isOpen) => !isOpen);
//   }

//   const blur = isOpen === true ? "blur-xs" : "";

//   return (
//     <>
//       <div className="h-dvh -4">
//         <Navbar isOpen={isOpen} handleNavbarDisplay={handleNavbarDisplay} />
//         <Hero isOpen={isOpen} setIsOpen={setIsOpen} blur={blur} />
//         <div
//           className={`${blur} transition-all duration-600`}
//           onClick={() => setIsOpen(false)}
//         >
//           <Intro />
//           <Services />
//           <Featured />
//           <Parent />
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavbarDisplay() {
    setIsOpen((isOpen) => !isOpen);
  }

  const blur = isOpen === true ? "blur-xs" : "";

  return (
    <>
      <div className="h-dvh scroll-smooth">
        {/* ONLY THIS WRAP IS NEW */}
        <div className="relative overflow-hidden">
          {/* BACKGROUND IMAGE */}
          <img
            src={hero}
            alt=""
            className="absolute inset-0 w-full h-full object-cover -z-20"
          />

          {/* OPTIONAL GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent -z-10"></div>

          <Navbar isOpen={isOpen} handleNavbarDisplay={handleNavbarDisplay} />

          <Hero isOpen={isOpen} setIsOpen={setIsOpen} blur={blur} />
        </div>

        {/* EVERYTHING BELOW UNTOUCHED */}
        <div
          className={`${blur} transition-all duration-600`}
          onClick={() => setIsOpen(false)}
        >
          <Intro />
          <Services />
          <Featured />
          <Parent />
          <Footer />
        </div>
      </div>
    </>
  );
}
export default App;
