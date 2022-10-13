import DomElements from "./dom-elements/DomElement.js";

const root = document.querySelector(".container");
const header = new DomElements(root as HTMLElement, "header", "");
header.render();
const main = new DomElements(root as HTMLElement, "main", "main");
main.render();
const mainDom = document.querySelector("main");
const sectionSeries = new DomElements(mainDom, "section", "series");
sectionSeries.render();
