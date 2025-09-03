import { render, screen } from "@testing-library/react";
import { Contact } from "@/components";

describe("<Contact />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Contact />);
    container = renderResults.container;
  });

  describe("Render elements", () => {
    it("Render div", () => {
      expect(container.querySelectorAll("div").length).toBe(2);
    });

    it("Render h1", () => {
      expect(container.querySelectorAll("h1").length).toBe(1);
    });

    it("Render p", () => {
      expect(container.querySelectorAll("p").length).toBe(1);
    });

    it("Render button", () => {
      expect(container.querySelectorAll("button").length).toBe(1);
    });

    it("Render span", () => {
      expect(container.querySelectorAll("span").length).toBe(1);
    });

    it("Render i", () => {
      expect(container.querySelectorAll("i").length).toBe(1);
    });

    it("Render a", () => {
      expect(container.querySelectorAll("a").length).toBe(1);
    });

    it("Render svg", () => {
      expect(container.querySelectorAll("svg").length).toBe(1);
    });
  });

  describe("Render text", () => {
    it("Render text h1", () => {
      expect(screen.getByText(/¡Hablemos!/i)).toBeInTheDocument();
    });

    it("Render text p", () => {
      expect(
        screen.getByText(
          /Contáctame para iniciar tu proyecto de desarrollo web y hacer realidad tu visión./i
        )
      ).toBeInTheDocument();
    });

    it("Render text span", () => {
      expect(screen.getByText(/Contacto/i)).toBeInTheDocument();
    });
  });

  describe("A has properties", () => {
    it("href", () => {
      const hrefProperty = screen.getByRole("link");
      const emailAddress = process.env.NEXT_PUBLIC_GMAIL;
      expect(hrefProperty).toHaveAttribute(
        "href",
        `mailto:${emailAddress}.com?subject=Curso%20Binance%20desde%200&body=Curso%20Binance%20mensaje%20desde%200`
      );
    });

    it("target", () => {
      const targetProperty = screen.getByRole("link");
      expect(targetProperty).toHaveAttribute("target", "_blank");
    });

    it("rel", () => {
      const relProperty = screen.getByRole("link");
      expect(relProperty).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  describe("Styles in components", () => {
    it("Div 1 has styles", () => {
      const div = container.querySelectorAll("div");
      expect(div[0].className).toBe(
        "contact-color-light relative -top-20 p-1 rounded-xl md:w-[1100px]"
      );
    });

    it("Div 2 has styles", () => {
      const div = container.querySelectorAll("div");
      expect(div[1].className).toBe(
        "button-color-light flex flex-col text-center items-center justify-center p-2 rounded-xl md:flex md:flex-row md:justify-around md:items-center md:h-60"
      );
    });

    it("h1 has styles", () => {
      const hLabel = container.querySelector("h1");
      expect(hLabel).toHaveClass(
        "text-family",
        "text-[27px]",
        "font-semibold",
        "md:text-[40px]"
      );
    });

    it("p has styles", () => {
      const pLabel = container.querySelector("p");
      expect(pLabel).toHaveClass(
        "text-family-second",
        "text-[16px]",
        "leading-6",
        "md:text-[27px]",
        "md:w-[500px]",
        "md:leading-12"
      );
    });

    it("button has styles", () => {
      const button = container.querySelector("button");
      expect(button).toHaveClass("contact-color-light", "my-2", "md:h-14");
    });

    it("span has styles", () => {
      const span = container.querySelector("span");
      expect(span).toHaveClass(
        "text-color-light",
        "font-medium",
        "md:text-[25px]"
      );
    });

    it("i has styles", () => {
      const iLabel = container.querySelector("i");
      expect(iLabel).toHaveClass("text-color-light");
    });
  });
});
