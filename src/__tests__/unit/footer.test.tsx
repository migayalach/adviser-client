import { screen, render } from "@testing-library/react";
import { Footer } from "@/components";

describe("<Footer />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Footer />);
    container = renderResults.container;
  });

  it("Render div", () => {
    expect(container.querySelectorAll("div").length).toBe(1);
  });

  it("Render span", () => {
    expect(container.querySelectorAll("span").length).toBe(1);
  });

  it("Render text", () => {
    expect(screen.getByText(/Creado por XD \(2025\) ©/i)).toBeInTheDocument();
  });

  it("Div has correct Css classes", () => {
    const renderDiv = container.querySelector("div");
    expect(renderDiv).toHaveClass(
      "container-two-light",
      "flex",
      "items-center",
      "justify-center",
      "text-center",
      "h-8",
      "p-4"
    );
  });

  it("Span has correct Css classes", () => {
    const renderSpan = container.querySelector("span");
    expect(renderSpan).toHaveClass("text-[8px]");
  });
});
