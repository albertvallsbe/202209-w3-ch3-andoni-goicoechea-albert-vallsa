import DomElements from "../dom-components/domElements/DomElement.js";
import type { Serie } from "../Series/types.js";

class SeriesCard extends DomElements {
  constructor(parentElement: HTMLElement, readonly serie: Serie) {
    super(parentElement, "li", "serie");
  }

  render() {
    super.render();

    const { name, creator, year, poster } = this.serie;
    this.domElement.innerHTML = `
      <img class="serie__poster" src="${poster}" alt="${name} poster" />
      <h4 class="serie__title">${name}</h4>
      <p class="serie__info">${creator} (${year})</p>
      <ul class="score">
        <li class="score__star">
          <i class="icon--score fas fa-star" title="1/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="2/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="3/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="4/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="5/5"></i>
        </li>
      </ul>
      <i class="fas fa-times-circle icon--delete"></i>
    `;
  }
}

export default SeriesCard;
