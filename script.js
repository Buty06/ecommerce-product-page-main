const openMenu = () => {
  const openButton = document.getElementById("menu_logo");
  const clouseButton = document.getElementById("clouse_menu_btn");
  const aside = document.getElementById("aside");

  openButton.addEventListener("click", () => {
    aside.style.display = "grid";
    aside.classList.remove("sliderIn");
    aside.classList.add("sliderOff");
  });

  clouseButton.addEventListener("click", () => {
    aside.classList.remove("sliderOff");

    aside.classList.add("sliderIn");

    setTimeout(() => {
      aside.style.display = "none";
    }, 950);
  });
};

openMenu();
