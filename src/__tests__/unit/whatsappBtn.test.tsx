import { screen, render } from "@testing-library/react";
import { WhatsappButton } from "@/components";

describe("<WhatsappButton />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<WhatsappButton />);
    container = renderResults.container;
  });

  describe("Render components", () => {
    it("Render label 'a'", () => {
      expect(container.querySelectorAll("a").length).toBe(1);
    });

    it("Render icon 'FaWhatsapp'", () => {
      const iconElement = container.querySelector("svg");
      expect(iconElement).toBeInTheDocument();
    });
  });

  describe("'a' has properties", () => {
    it("href", () => {
      const aElement = screen.getByRole("link");
      const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
      const message =
        "Hola, quiero más información sobre los servicios disponibles.";
      expect(aElement).toHaveAttribute(
        "href",
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      );
    });

    it("target", () => {
      const aElement = screen.getByRole("link");
      expect(aElement).toHaveAttribute("target", "_blank");
    });

    it("rel", () => {
      const aElement = screen.getByRole("link");
      expect(aElement).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("Styles className", () => {
      const aElement = screen.getByRole("link");
      expect(aElement).toHaveClass("whatsapp-button");
    });
  });
});
