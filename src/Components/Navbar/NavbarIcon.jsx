function NavbarIcon({ handleNavbarDisplay, isOpen }) {
  const rotateClock = isOpen ? "rotate-45 translate-y-1" : "";
  const rotateAntiClock = isOpen ? "-rotate-45 -translate-y-1" : "";
  const disappear = isOpen ? "hidden" : "";
  return (
    <>
      <div
        className="flex flex-col gap-[5px] cursor-pointer lg:hidden"
        onClick={handleNavbarDisplay}
      >
        <div
          className={`transition-all duration-600 w-8 h-[3px] bg-black ${rotateClock}`}
        ></div>
        <div
          className={`transition-all duration-600 w-8 h-[3px] bg-black ${disappear}`}
        ></div>
        <div
          className={`transition-all duration-600 w-8 h-[3px] bg-black ${rotateAntiClock}`}
        ></div>
      </div>
    </>
  );
}

export default NavbarIcon;
