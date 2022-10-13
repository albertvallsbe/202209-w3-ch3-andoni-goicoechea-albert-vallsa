import DomElements from "./dom-components/domElements/DomElement.js";
import ItemText from "./ItemText/ItemText.js";

const root = document.querySelector(".container");
const header = new DomElements(root as HTMLElement, "header", "main-header");
header.render();

const mainTitle = document.querySelector(".main-header");
const headerTitle = new ItemText(
  mainTitle as HTMLElement,
  "h1",
  "main-title",
  "My Series"
);
headerTitle.render();

const main = new DomElements(root as HTMLElement, "main", "main");
main.render();

const mainDom = document.querySelector("main");
const sectionSeries = new DomElements(mainDom, "section", "series");
sectionSeries.render();

const seriesSection = document.querySelector(".series");
const seriesTitle = new ItemText(
  seriesSection as HTMLElement,
  "h2",
  "section-title",
  "Series list"
);
seriesTitle.render();
