import "./popup.css";

const gallery = document.getElementById("gallery");

const handleClose = (ev: Event) => {
  ev.stopPropagation();
  console.log(ev.target);
  const bg = document.getElementById("popup");
  if (ev.target === bg) bg?.classList.add("hidden");
};

const bgClick: EventListener = (ev) => {
  const photos = document.getElementsByClassName(
    "grid-item"
  ) as HTMLCollectionOf<HTMLImageElement>;

  const background = document.getElementById("popup");
  console.log(background);
  if (!background) {
    throw new Error("Cannot find the popup");
  }
  background.classList.toggle("hidden");
  const close = document.getElementById("popup-close");

  const popupImg = new Image();
  popupImg.src = photos[0].src;
  popupImg.classList.add("popup-image");
  background.appendChild(popupImg);
  background.addEventListener("click", handleClose);
};

export const popup = () => {
  const bg = document.getElementById("photo-bg");
  bg?.addEventListener("click", bgClick);
};
