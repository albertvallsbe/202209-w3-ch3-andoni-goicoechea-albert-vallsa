import DomElements from "./DomElement.js";

describe("Given the instance of DomElements", () => {
  describe("When it's rendered with a parent element <div>, as <span> and 'heart' class name", () => {
    const screen = document.createElement("div");
    const className = ".heart";

    const heartComponent = new DomElements(screen, "span", "heart");
    heartComponent.render();

    test("Then it should show a span with the class heart as child of screen", () => {
      const heart = screen.querySelector(className);

      expect(heart).not.toBeNull();
    });

    test("Then it should show a span with the tag <span> as child of screen", () => {
      const span = screen.querySelector("span");

      expect(span).not.toBeNull();
    });
  });
});
