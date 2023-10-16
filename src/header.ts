import expandSvg from "../assets/custom-svg/expand.svg";

const menu = document.getElementById("offer-menu");
const expand = document.createElementNS("http://www.w3.org/2000/svg", "svg");
menu?.appendChild(expand);
expand.outerHTML = expandSvg;
menu?.addEventListener("mouseover", function () {
  this.querySelector("#menu")?.classList.remove("scale-y-0");
  this.querySelector("#menu")?.classList.add("scale-y-100");
  this.lastElementChild?.classList.add("transition-transform", "rotate-180");
});
menu?.addEventListener("mouseleave", function () {
  this.querySelector("#menu")?.classList.remove("scale-y-100");
  this.querySelector("#menu")?.classList.add("scale-y-0");
  this.lastElementChild?.classList.remove("rotate-180");
});
