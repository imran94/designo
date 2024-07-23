const startAnimation = (entries, observer) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("animate", entry.isIntersecting);
  });
};

const observer = new IntersectionObserver(startAnimation);
const options = { root: null, rootMargin: "0px", threshold: 1.0 };
const observeNullRoot = (el) => {
  if (el.className) {
    observer.observe(el, options);
  }
};
const observeChildren = (el) => {
  el.childNodes.forEach(observeNullRoot);
};

document.querySelectorAll(".banner").forEach((b) => {
  observeNullRoot(b);
  observeChildren(b);
});
document.querySelectorAll(".banner-secondary").forEach((b) => {
  observeNullRoot(b);
  observeChildren(b);
});
document.querySelectorAll(".design-type").forEach(observeNullRoot);
document.querySelectorAll(".skill").forEach(observeChildren);
document.querySelectorAll(".location").forEach(observeChildren);
document.querySelectorAll(".map").forEach(observeNullRoot);
document.querySelectorAll(".project").forEach((p) => {
  observeNullRoot(p);
  observeChildren(p);
});
document.querySelectorAll(".project-contact-section").forEach((p) => {
  observeNullRoot(p);
  observeChildren(p);
});
