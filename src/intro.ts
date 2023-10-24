import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import gardenPhoto from "../assets/Hero.png";
import housePhoto from "../assets/Photo-1.png";
import swimmPhoto from "../assets/Photo-7.png";

const intro = document.getElementById("intro");
const template = document.getElementById(
  "intro-content"
) as HTMLTemplateElement;
if (!intro || !template) {
  throw new Error("Section intro or template do not exist...");
}
const clone = template.content;

const swiperContainer = intro.querySelector(".swiper-wrapper");

const names = ["Twojego ogrodu", "Twojego domu", "Twojego basenu"];
names.forEach((name) => {
  const clone = template.content;
  let slideType: Element | null;
  if (!(slideType = clone.querySelector("#slide-name"))) {
    throw new Error(`Slide ${name} not exist...`);
  }
  slideType.innerHTML = name;
  const bgPhoto = clone.querySelector("#hero-photo") as HTMLElement;
  switch (name) {
    case "Twojego ogrodu":
      bgPhoto.style.backgroundImage = `url(${gardenPhoto})`;
      break;
    case "Twojego domu":
      bgPhoto.style.backgroundImage = `url(${housePhoto})`;
      break;
    case "Twojego basenu":
      bgPhoto.style.backgroundImage = `url(${swimmPhoto})`;
      break;
  }
  clone.firstElementChild?.classList.add("swiper-slide");
  swiperContainer?.appendChild(clone.cloneNode(true));
});

const swiper = new Swiper("#intro .swiper", {
  modules: [Navigation, Pagination],
  grabCursor: true,
  containerModifierClass: "swipper-intro-",
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".swiper-pagination.intro-pagination",
  },
  loop: true,
});
