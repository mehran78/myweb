// #AE7F4A
// #14264A

function Button({
  text,
  mx = 0,
  mr = 0,
  // padx = "20px",
  // fontSize = "1rem",
  bgc = "#AE7F4A",
  color = "#fff9f1",
  extraClasses,
  func,
}) {
  return (
    <button
      className={`custom-button py-2 mx-${mx} text-xs px-2 rounded-sm mr-${mr} ${extraClasses} sm:px-2 md:px-4 lg:px-6 sm:text-sm lg:text-[1rem] cursor-pointer`}
      style={{
        backgroundColor: bgc,
        color: color,
        // fontSize: fontSize,
        // paddingLeft: padx,
        // paddingRight: padx,
      }}
      onClick={func}
    >
      {text}
    </button>
  );
}

export default Button;
