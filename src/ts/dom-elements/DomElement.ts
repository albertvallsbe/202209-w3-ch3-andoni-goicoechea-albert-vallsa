import type { DomComponentStructure } from "./types";

class DomElements implements DomComponentStructure {
  domElement: HTMLElement;

  constructor(
    private readonly parentElement: Element,
    public tag: string,
    public className: string
  ) {
    this.domElement = document.createElement(tag);
    this.domElement.className = className;
  }

  render() {
    this.parentElement.appendChild(this.domElement);
  }
}

export default DomElements;
