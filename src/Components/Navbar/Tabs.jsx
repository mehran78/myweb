import Button from "./Button";
import Tab from "./Tab";

const navbarItems = ["Home", "Services", "Properties", "Blog", "Contact Me"];

function WhatsAppButton() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/923330535049", "_blank");
  };
  handleWhatsApp();
}

function Tabs({ isOpen }) {
  const marginLeft = isOpen === true ? "left-[0]" : "left-[-100dvw]";

  const originalFlex =
    "lg:flex-row lg:left-auto lg:h-auto lg:bg-transparent lg:top-auto lg:font-sm lg:static";

  return (
    <>
      <div
        className={`bg-[#302f30] flex-col lg:items-center fixed top-0 ${marginLeft} transition-all duration-600 p-4 lg:p-0 flex font-medium h-[100dvh] z-100 ${originalFlex}`}
      >
        {navbarItems.map((item) => (
          <Tab key={item} Name={`${item}`} />
        ))}
        <Button
          text={"Call / WhatsApp"}
          mx={"6"}
          bgc={"#AE7F4A"}
          func={WhatsAppButton}
        />
      </div>
    </>
  );
}

export default Tabs;
