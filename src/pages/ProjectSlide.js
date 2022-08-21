export let mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: true,
  parallax: true,
  speed: 1000,
});

export const buttonNext = document.querySelector(".next");
export const buttonPrev = document.querySelector(".prev");

buttonNext.addEventListener("click", (event) => {
  mySwiper.slideNext();
});

buttonPrev.addEventListener("click", (event) => {
  mySwiper.slidePrev();
});
