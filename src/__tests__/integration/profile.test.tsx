import { render, screen } from "@testing-library/react";
import { Profile } from "@/components";

describe("Component <Profile />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Profile />);
    container = renderResults.container;
  });

  it("Render div tag", () => {
    expect(container.querySelectorAll("div").length).toBe(3);
  });

  it("Render Picture tag", () => {
    expect(container.querySelectorAll("img").length).toBe(1);
  });

  it("Render h1 tag", () => {
    expect(container.querySelectorAll("h1").length).toBe(1);
  });

  it("Render p tag", () => {
    expect(container.querySelectorAll("p").length).toBe(1);
  });
});

describe("Profile has correct class", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Profile />);
    container = renderResults.container;
  });

  it("Div-1 has classes", () => {
    const divElement = container.querySelectorAll("div");
    expect(divElement[0].className).toBe(
      "container-one-light flex flex-col justify-center items-center p-6"
    );
  });

  it("Div-2 has classes", () => {
    const divElement = container.querySelectorAll("div");
    expect(divElement[1].className).toBe("md:w-96");
  });

  it("h1 has classes", () => {
    const h1Element = container.querySelector("h1");
    expect(h1Element).toHaveClass(
      "text-family",
      "color-text-light",
      "font-bold",
      "text-[33px]",
      "md:text-[50px]",
      "italic pt-2"
    );
  });

  it("p has classes", () => {
    const pElement = container.querySelector("p");
    expect(pElement).toHaveClass(
      "text-family",
      "color-text-light",
      "font-semibold",
      "text-[23px]",
      "md:text-[40px]",
      "mt-1 italic"
    );
  });
});

describe("Integration - <Profile /> with <Picture />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Profile />);
    container = renderResults.container;
  });

  it("Render Profile with Picture inside", () => {
    const father = container.querySelector("#about-me");
    expect(father).toBeInTheDocument();

    const child = screen.getByRole("img", { name: /profile/i });
    expect(father).toContainElement(child);
  });

  it("Profile and Picture can interact", () => {
    const renderImage = screen.getByRole("img", { name: /profile/i });
    expect(renderImage).toHaveAttribute("alt", "profile");
  });
});
