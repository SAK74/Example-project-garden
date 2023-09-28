import Masonry from "masonry-layout";
// import PhotoSwipe from "photoswipe";
// import "photoswipe/style.css";

const container = document.getElementById("gallery");
if (!container) {
  throw new Error("Gallery container not exist!");
}

const msnr = new Masonry(container, {
  itemSelector: ".grid-item",
  gutter: ".gutter-sizer",
  columnWidth: ".sizer",
  percentPosition: true,
});

const urls = Array(9)
  .fill("")
  .map((el, i) => `assets/Photo-${8 - i}.png`);

urls.forEach((url, i) => {
  const image = new Image();
  image.src = url;
  image.addEventListener("load", function (ev) {
    console.log(`this: ${i}`, this.height);
    msnr.appended!([this]);
    msnr.layout!();
  });

  image.classList.add("grid-item");
  container.prepend(image);
});

// const pswipe = new PhotoSwipe({
//   // appendToEl: container,
//   gallery: container,
//   pswpModule: () => import("photoswipe"),
//   children: "a",
//   // dataSource:
// });
// pswipe.init();
