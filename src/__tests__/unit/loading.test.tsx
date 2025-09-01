import { render, screen } from "@testing-library/react";
import { Loading } from "@/components";

describe("<Loading />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Loading />);
    container = renderResults.container;
  });

  describe("Render components and text", () => {
    it("Render div", () => {
      expect(container.querySelectorAll("div").length).toBe(3);
    });

    it("Render p", () => {
      expect(container.querySelectorAll("p").length).toBe(1);
    });

    it("Render text", () => {
      expect(screen.getByText(/Cargando.../i)).toBeInTheDocument();
    });
  });

  describe("Styles", () => {
    it("Div 1 has Css classes", () => {
      const div = container.querySelectorAll("div");
      expect(div[0].className).toBe(
        "flex justify-center items-center h-screen"
      );
    });

    it("Div 2 has Css classes", () => {
      const div = container.querySelectorAll("div");
      expect(div[1].className).toBe("text-center");
    });

    it("Div 3 has Css classes", () => {
      const div = container.querySelectorAll("div");

      expect(div[2].className).toBe(
        "w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto"
      );
    });

    it("p has Css classes", () => {
      const renderPElement = container.querySelector("p");
      expect(renderPElement).toHaveClass("mt-2", "text-gray-700");
    });
  });
});
