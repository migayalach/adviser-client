import * as React from "react";
import { render, screen } from "@testing-library/react";
import { MoonFilledIcon, SunFilledIcon, HomeIcon } from "@/components/icons";

describe("Icon components", () => {
  test("MoonFilledIcon renders correctly with default size", () => {
    render(<MoonFilledIcon />);
    const svg = screen.getByRole("presentation", { hidden: true });
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("height", "24");
    expect(svg).toHaveAttribute("width", "24");
  });

  test("SunFilledIcon renders correctly with custom size", () => {
    render(<SunFilledIcon size={32} />);
    const svg = screen.getByRole("presentation", { hidden: true });
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("height", "32");
    expect(svg).toHaveAttribute("width", "32");
  });

  test("HomeIcon renders correctly with custom width and height", () => {
    const { container } = render(<HomeIcon width={48} height={48} />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("width", "48");
    expect(svg).toHaveAttribute("height", "48");
  });
});
