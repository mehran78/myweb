function Tab({ Name }) {
  let source = Name.toLowerCase();
  function comprehendSource() {
    if (Name === "Properties") {
      source = "featured";
    } else if (Name === "Blog") {
      source = "insights";
    }
  }
  comprehendSource();
  return (
    <a href={`#${source}`}>
      <p className="w-full text-[#f1f1f1] lg:text-[#302f30] text-[17px] py-3 px-4 lg:py-0 lg:px-3">
        {Name}
      </p>
    </a>
  );
}

export default Tab;
