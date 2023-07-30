const navItems = [
  {
    pathname: "/",
    icon: "house-door",
  },
  {
    pathname: "generate-token",
    icon: "plus-circle-dotted",
  },
  {
    pathname: "validate-token",
    icon: "bag-check",
  },

].map((item, index) => ({ ...item, title: `nav-items.${index}`, id: index }));
export default navItems;
