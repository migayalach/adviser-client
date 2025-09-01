import { render, screen } from "@testing-library/react";
import { Buttons } from "@/components";

describe("<Buttons />", () => {
  it("Render button", () => {
    const renderResults = render(<Buttons id="1C" url="service" />);
    expect(renderResults.container.querySelectorAll("button").length).toBe(1);
  });

  it("Render Text", () => {
    render(<Buttons id="1C" url="course" />);
    expect(screen.getByText(/Saber más/i)).toBeInTheDocument();
  });

  it("Link action 'course'", () => {
    render(<Buttons id="1C" url="course" />);
    const linkElement = screen.getByRole("link", { name: /Saber más/i });
    expect(linkElement).toHaveAttribute("href", "/course/1C");
  });

  it("Link action 'service'", () => {
    render(<Buttons id="1S" url="service" />);
    const linkElement = screen.getByRole("link", { name: /Saber más/i });
    expect(linkElement).toHaveAttribute("href", "/service/1S");
  });

  it("Button has correct Css classes", () => {
    const renderResults = render(<Buttons id="1C" url="service" />);
    const buttonStyles = renderResults.container.querySelector("button");
    expect(buttonStyles).toHaveClass(
      "text-[18px]",
      "button-color-services-light",
      "md:text-[25px]",
      "md:h-14"
    );
  });
});
