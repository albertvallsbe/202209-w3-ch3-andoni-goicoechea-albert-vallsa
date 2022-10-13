import type { DomComponentStructure } from "./types";

class DomElements implements DomComponentStructure {
  domElement: HTMLElement;

  constructor(
    public parentElement: HTMLElement,
    public tag: string,
    public className: string
  ) {
    this.domElement = document.createElement(tag);
    if (className !== "") {
      this.domElement.className = className;
    }
  }

  render() {
    this.parentElement.appendChild(this.domElement);
  }
}

export default DomElements;
