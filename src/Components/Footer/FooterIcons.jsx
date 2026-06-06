import fb from "../../Images/fb.png";
import insta from "../../Images/insta.png";
import x from "../../Images/x.png";
function FooterIcons() {
  return (
    <div className="flex bg-red-3 gap-1 lg:gap-2 lg:absolute lg:top-5 lg:left-12">
      <a>
        <img
          src={fb}
          style={{ height: "35px", width: "35px", cursor: "pointer" }}
        />
      </a>
      <a>
        <img
          src={insta}
          style={{ height: "35px", width: "38px", cursor: "pointer" }}
        />
      </a>
      <a>
        <img
          src={x}
          style={{ height: "35px", width: "35px", cursor: "pointer" }}
        />
      </a>
    </div>
  );
}

export default FooterIcons;
