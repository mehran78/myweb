import LogoIcon from "./LogoIcon";
function Logo() {
  return (
    <div className="flex items-center">
      <LogoIcon />
      <p className="text-[1.4rem] lg:text-[1.6rem] italic font-semibold text-[#2B3756]">
        Mehran Abbasi
      </p>
    </div>
  );
}

export default Logo;
