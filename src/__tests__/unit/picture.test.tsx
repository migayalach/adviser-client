import { screen, render } from "@testing-library/react";
import { Picture } from "@/components";

describe("<Picture />", () => {
  const props = {
    alt: "My-Image",
    src: "picture.jpg",
    width: "300",
  };

  let container: HTMLElement;

  beforeEach(() => {
    const renderResult = render(
      <Picture alt={props.alt} src={props.src} width={props.width} />
    );
    container = renderResult.container;
  });

  it("Render Image", () => {
    const imageElement = screen.getByAltText(props.alt);
    expect(imageElement).toBeInTheDocument();
  });

  it("The image has src correct", () => {
    const imageElement = screen.getByAltText(props.alt) as HTMLImageElement;
    expect(imageElement.src).toContain(props.src);
  });

  it("The image has te width correct", () => {
    const imageElement = screen.getByAltText(props.alt) as HTMLImageElement;
    expect(imageElement.width.toString()).toBe(props.width);
  });
});
