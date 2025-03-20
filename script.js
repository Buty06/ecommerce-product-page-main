const openButton = document.getElementById("menu_logo");
const clouseButton = document.getElementById("clouse_menu_btn");
const main = document.getElementById("main");
const aside = document.getElementById("aside");

openButton.addEventListener("click", (e) => {
  aside.style.display = "grid";
  aside.classList.remove("sliderIn");
  aside.classList.add("sliderOff");
});

const clouseAside = () => {
  aside.classList.remove("sliderOff");
  aside.classList.add("sliderIn");

  setTimeout(() => {
    aside.style.display = "none";
  }, 950);
};

clouseButton.addEventListener("click", clouseAside);
main.addEventListener("click", clouseAside);
