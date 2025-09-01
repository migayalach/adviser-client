import { render } from "@testing-library/react";
import { AboutMe } from "@/components";

describe("<AboutMe />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResult = render(<AboutMe />);
    container = renderResult.container;
  });

  it("Render div", () => {
    expect(container.querySelectorAll("div").length).toBe(1);
  });

  it("Render h1", () => {
    expect(container.querySelectorAll("h1").length).toBe(1);
  });

  it("Render p", () => {
    expect(container.querySelectorAll("p").length).toBe(1);
  });
});
