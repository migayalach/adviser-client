import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Cards } from "@/components";

describe("<Cards />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(
      <Cards id="1C" image="image.jpg" title="Hello world" />
    );
    container = renderResults.container;
  });

  it("Render Image", () => {
    expect(container.querySelectorAll("img").length).toBe(1);
  });

  it("Render Image alt property", () => {
    const altText = screen.getByAltText("Hello world");
    expect(altText).toBeInTheDocument();
  });

  it("Render Image src property", () => {
    const srcProperty = screen.getByAltText("Hello world");
    expect(srcProperty).toHaveAttribute("src", "image.jpg");
  });

  it("Render text", () => {
    const textView = screen.getByRole("heading", { name: /Hello world/i });
    expect(textView).toBeInTheDocument();
  });

  it("Render button", () => {
    expect(container.querySelectorAll("button").length).toBe(1);
  });
});

describe("Styles - <Cards />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(
      <Cards id="1C" image="image.jpg" title="Hello world" />
    );
    container = renderResults.container;
  });

  it("Card has classes", () => {
    const cardStyles = container.firstChild;
    expect(cardStyles).toHaveClass("md:h-96", "md:w-96");
  });

  it("h2 has classes", () => {
    const h2Styles = container.querySelector("h2");
    expect(h2Styles).toHaveClass("text-[20px]", "md:text-[30px]");
  });
});

describe("Integration - <Cards /> with <Button />", () => {
  beforeEach(() => {
    render(<Cards id="1C" image="image.jpg" title="Hello world" />);
  });

  it("Render Cards with Button inside", () => {
    const father = screen.getByRole("heading", { name: /Hello world/i });
    expect(father).toBeInTheDocument();

    const child = screen.getByRole("button", { name: /Saber más/i });
    expect(child).toBeInTheDocument();
  });

  it("Card and Button can interact", async () => {
    const buttonElement = screen.getByRole("button", {
      name: /Saber más/i,
    });
    await userEvent.click(buttonElement);
    expect(buttonElement).toBeInTheDocument();
  });
});
