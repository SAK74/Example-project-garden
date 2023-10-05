import "./popup.css";
import "swiper/css";
import "swiper/css/navigation";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const handleClose = (ev: Event) => {
  // console.log("target: ", ev.target);
  const bg = document.getElementById("popup");
  if (ev.target === ev.currentTarget) {
    bg?.classList.add("hidden");
    bg?.querySelectorAll(".swiper-slide").forEach((item) => {
      item.remove();
    });
  }
};

const bgClick: EventListener = (ev) => {
  const photos = document.getElementsByClassName(
    "grid-item"
  ) as HTMLCollectionOf<HTMLImageElement>;

  const background = document.getElementById("popup");
  // console.log(background);
  if (!background) {
    throw new Error("Cannot find the popup");
  }
  background.classList.remove("hidden");
  const close = document.getElementById("popup-close");

  background.addEventListener("click", handleClose);

  const swiperWrapper = background.querySelector(".swiper-wrapper");
  for (let i = 0; i < photos.length; i += 1) {
    const item = new Image();
    item.src = photos[i].src;
    item.classList.add("swiper-slide");
    console.log("load: ", item);
    swiperWrapper?.appendChild(item);
  }
  // const swiper = new Swiper(".swiper", {
  //   modules: [Navigation],
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   loop: true,

  //   // autoplay: {
  //   //   delay: 1000,
  //   // },
  //   centeredSlides: true,
  // });
};

export const popup = () => {
  const bg = document.getElementById("photo-bg");
  bg?.addEventListener("click", bgClick);
  const swiper = new Swiper(".swiper", {
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    // autoHeight: true,
    // autoplay: {
    //   delay: 1000,
    // },
    // centeredSlides: true,
  });
};
