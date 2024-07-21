let isNavListEnabled = false;
const toggleNavBar = () => {
  console.log("toggleNavBar");
  isNavListEnabled = !isNavListEnabled;
  document.getElementById("nav-toggle").src = `assets/shared/mobile/icon-${
    isNavListEnabled ? "close" : "hamburger"
  }.svg`;
  document
    .getElementById("nav-list-mobile")
    .classList.toggle("nav-list-visible");
};
