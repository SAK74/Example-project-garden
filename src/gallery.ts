import Masonry from "masonry-layout";
import { popup } from "./popup";

const container = document.getElementById("gallery");
if (!container) {
  throw new Error("Gallery container not exist!");
}

const msnr = new Masonry(container, {
  itemSelector: ".grid-item",
  gutter: ".gutter-sizer",
  columnWidth: ".sizer",
  percentPosition: true,
  horizontalOrder: true,
});

const urls = Array(9)
  .fill("")
  .map((el, i) => `assets/Photo-${8 - i}.png`);

const addPhotos = () => {
  urls.forEach((url, i) => {
    const image = new Image();
    image.src = url;
    image.addEventListener("load", function (ev) {
      msnr.appended!([this]);
      msnr.layout!();
    });

    image.classList.add("grid-item");
    container.appendChild(image);
  });
};

addPhotos();

const btn = document.getElementById("expand") as HTMLButtonElement;
const changeBtn = (type: string) => {
  btn.firstChild?.replaceWith(type);
  btn.lastElementChild?.classList.toggle("rotate-90");
  btn.lastElementChild?.classList.toggle("-rotate-90");
};

const expandEv = () => {
  addPhotos();
  changeBtn("Zwiń");
  btn.onclick = collapseEv;
};
const collapseEv = () => {
  const photos = document.getElementsByClassName("grid-item");
  for (let i = photos.length - 1; i > 8; i -= 1) {
    const lastPhoto = photos.item(i);
    if (lastPhoto) {
      container.removeChild(lastPhoto);
      msnr.remove!([lastPhoto]);
      msnr.layout!();
    }
  }
  changeBtn("Rozwiń");
  btn.onclick = expandEv;
};

btn.onclick = expandEv;

popup();
