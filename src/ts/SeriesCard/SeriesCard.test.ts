import SeriesCard from "./SeriesCard";

describe("Given SeriesCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should be displayed within a 'li' element with the class 'serie'", () => {
      const ul = document.createElement("ul");
      const data = {
        id: 0,
        name: "",
        creator: "",
        year: 0,
        poster: "",
        watched: false,
        score: 0,
        emmies: 0,
      };

      const seriesCardComponent = new SeriesCard(ul as HTMLElement, data);
      seriesCardComponent.render();
      const seriesCardDom = ul.querySelector("li");

      expect(seriesCardDom.className).toBe("serie");
    });
  });
});
