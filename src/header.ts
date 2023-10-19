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

const searchForm = document.forms.namedItem("search");

if (!searchForm) {
  throw new Error("The form is not defined!");
}

function onSubmit(form: HTMLFormElement) {
  const val = (form.elements.namedItem("search") as RadioNodeList).value;
  console.log(val);
}

const searchBtn = document.getElementById("search-btn");
searchBtn?.addEventListener("click", function () {
  onSubmit(searchForm);
});

searchForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  onSubmit(this);
});
