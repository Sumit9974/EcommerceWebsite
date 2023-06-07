const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const navClose = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => { 
    nav.classList.add("active");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
