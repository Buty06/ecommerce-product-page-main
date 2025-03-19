const openMenu = () => {
  const openButton = document.getElementById("menu_logo");
  const aside = document.getElementById("aside");

  openButton.addEventListener("click", () => {
    aside.style.display = "grid";
  });
};

openMenu();
