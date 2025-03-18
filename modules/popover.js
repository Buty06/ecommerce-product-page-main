const showPopover = () => {
  if (window.innerWidth > 1000) {
    document.querySelectorAll(".swiper-slide").forEach((slide) => {
      slide.addEventListener("click", () => {
        const popover = document.getElementById("image-popover");
        const popoverImage = document.getElementById("popover-image");
        popoverImage.src = slide.src;
        popover.togglePopover();
      });
    });
  }
};

window.addEventListener("resize", showPopover);
