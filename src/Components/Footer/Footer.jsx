import FooterData from "./FooterData";
import FooterIcons from "./FooterIcons";

function Footer() {
  return (
    <footer className="block bg-[#17273E] flex flex-col items-center justify-center px-2 py-4 gap-4 lg:flex-row lg:gap-12 xl:gap-24 lg:relative lg:py-6">
      <FooterIcons />
      <FooterData />
    </footer>
  );
}

export default Footer;
