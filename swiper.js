const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelectorAll(".swiper-slide").forEach((slide) => {
  slide.addEventListener("click", () => {
    const popover = document.getElementById("image-popover");
    const popoverImage = document.getElementById("popover-image");
    popoverImage.src = slide.src;
    popover.togglePopover();
  });
});

