import arrow from "../assets/custom-svg/arrow.svg";
import searchIcon from "../assets/custom-svg/search.svg";
import svgLogo from "../assets/giarddesign-logo.svg";
import respectLogo from "../assets/logo-ad-respect.svg";

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
  icon.outerHTML = searchIcon;
}

const logos = document.getElementsByClassName("logo");
for (let i = 0; i < logos.length; i += 1) {
  logos[i].innerHTML = svgLogo;
  if (logos[i].classList.contains("white")) {
    const svgPath = logos[i].firstElementChild?.children;
    if (svgPath?.length) {
      for (let i = 0; i < svgPath.length; i += 1) {
        svgPath[i].classList.add("fill-_grey");
      }
    }
  }
}

const by = document.getElementById("ad-rescpect-logo");
const resLogo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const byLink = document.createElement("a");
byLink.appendChild(resLogo);
resLogo.outerHTML = respectLogo;
byLink.href = "https://adrespect.pl/";
byLink.rel = "noopener noreferrer";
byLink.target = "_blank";
by?.appendChild(byLink);
