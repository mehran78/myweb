// import Logo from "./Logo";
// import NavbarIcon from "./NavbarIcon";
// import Tabs from "./Tabs";
// function Navbar({ isOpen, handleNavbarDisplay }) {
//   return (
//     <>
//       <div className="flex items-center justify-between px-4 py-2 sm:px-8 lg:px-4 lg:py-4]">
//         <Logo />
//         <Tabs isOpen={isOpen} />
//         <NavbarIcon isOpen={isOpen} handleNavbarDisplay={handleNavbarDisplay} />
//       </div>
//     </>
//   );
// }

// export default Navbar;
import Logo from "./Logo";
import NavbarIcon from "./NavbarIcon";
import Tabs from "./Tabs";

function Navbar({ isOpen, handleNavbarDisplay }) {
  return (
    <div className="bg-transparent flex items-center justify-between px-4 py-2 sm:px-8 lg:px-4 lg:py-4 bg-gradient-to-r from-white/0 via-white/0 to-transparent">
      <Logo />
      <Tabs isOpen={isOpen} />
      <NavbarIcon isOpen={isOpen} handleNavbarDisplay={handleNavbarDisplay} />
    </div>
  );
}

export default Navbar;
