import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./popup.css";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import cross from "../assets/custom-svg/cross.svg";

const handleClose = () => {
  const bg = document.getElementById("popup");
  bg?.classList.add("hidden");
  bg?.querySelectorAll(".swiper-slide").forEach((item) => {
    item.remove();
  });
};

const bgClick: EventListener = () => {
  const photos = document.getElementsByClassName(
    "grid-item"
  ) as HTMLCollectionOf<HTMLImageElement>;

  const background = document.getElementById("popup");
  if (!background) {
    throw new Error("Cannot find the popup");
  }
  background.classList.remove("hidden");
  const closeBtn = document.getElementById("popup-close");
  if (!closeBtn) {
    throw new Error("Can't findclose button...");
  }
  closeBtn.innerHTML = cross;
  closeBtn.addEventListener("click", handleClose);
  document.getElementById("overlay")?.addEventListener("click", handleClose);

  const swiperWrapper = background.querySelector(".swiper-wrapper");
  for (let i = 0; i < photos.length; i += 1) {
    const photo = new Image();
    photo.src = photos[i].src;
    const item = document.createElement("div");
    item.classList.add("swiper-slide");
    item.appendChild(photo);
    swiperWrapper?.appendChild(item);
  }
};

export const popup = () => {
  const bg = document.getElementById("photo-bg");
  bg?.addEventListener("click", bgClick);
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // loop: true,
    grabCursor: true,
    pagination: { el: ".swiper-pagination" },
  });
};
