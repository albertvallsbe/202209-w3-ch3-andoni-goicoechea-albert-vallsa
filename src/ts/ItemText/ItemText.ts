import DomElements from "../dom-components/domElements/DomElement.js";

class ItemText extends DomElements {
  constructor(
    parentElement: HTMLElement,
    tag: string,
    className: string,
    private readonly text: string
  ) {
    super(parentElement, tag, className);
  }

  render() {
    super.render();
    this.domElement.textContent = this.text;
  }
}

export default ItemText;
