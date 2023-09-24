import arrow from "../assets/custom-svg/arrow.svg";
import searchIcon from "../assets/custom-svg/search.svg";

// console.log("? message from imported file!");
// console.log("TEST ICON HTML", downIcon);

const strokeBtns = document.getElementsByClassName("stroke");
for (let i = 0; i < strokeBtns.length; i += 1) {
  const icon = document.createElement("span");
  icon.innerHTML = arrow;
  icon.classList.add("w-4", "h-4");
  strokeBtns[i].appendChild(icon);
  strokeBtns[i].classList.add("btn-base");
}

const strokeDownBtns = document.getElementsByClassName("stroke-down");
for (let i = 0; i < strokeDownBtns.length; i += 1) {
  const icon = document.createElement("span");
  icon.innerHTML = arrow;
  icon.classList.add("w-4", "h-4", "rotate-90");
  strokeDownBtns[i].appendChild(icon);
  strokeDownBtns[i].classList.add("btn-base");
}

const lineBtns = document.getElementsByClassName("line");
for (let i = 0; i < lineBtns.length; i += 1) {
  // lineBtns[i].classList.add("line");
  const icon = document.createElement("span");
  icon.innerHTML = arrow;
  icon.classList.add("w-4", "h-4");
  lineBtns[i].appendChild(icon);
}

const searchBtns = document.getElementsByClassName("search-icon");
for (let i = 0; i < searchBtns.length; i += 1) {
  const icon = document.createElement("svg");
  const fragment = new DocumentFragment();
  fragment.append(icon);
  searchBtns[i].appendChild(fragment);
  icon.innerHTML = searchIcon;
}
