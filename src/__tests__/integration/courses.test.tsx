import { render, screen, within } from "@testing-library/react";
import { Courses } from "@/components";
import { courses } from "@/mocks";

describe("Component <Courses />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Courses />);
    container = renderResults.container;
  });

  it("Render div tag", () => {
    expect(container.querySelectorAll("div").length).toBe(3);
  });

  it("Render h1 tag", () => {
    expect(container.querySelectorAll("h1").length).toBe(1);
  });

  it("Render br tag", () => {
    expect(container.querySelectorAll("br").length).toBe(1);
  });
});

describe("Render text", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Courses />);
    container = renderResults.container;
  });

  it("Show text h1 tag", () => {
    expect(screen.getByText(/Cursos/i)).toBeInTheDocument();
  });
});

describe("Courses has correct class", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Courses />);
    container = renderResults.container;
  });

  it("Div-1 has classes", () => {
    const divElement = container.querySelectorAll("div");
    expect(divElement[0].className).toBe(
      "container-two-light flex flex-col justify-center items-center text-center p-4 md:py-10"
    );
  });

  it("Div-2 has classes", () => {
    const divElement = container.querySelectorAll("div");
    expect(divElement[1].className).toBe("md:w-[550px]");
  });

  it("h1 has classes", () => {
    const hElement = container.querySelector("h1");
    expect(hElement).toHaveClass(
      "text-[27px]",
      "text-center",
      "font-semibold",
      "mb-2",
      "md:text-[40px]"
    );
  });
});

describe("Integration - <Courses /> with <Picture /> and <Buttons />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Courses />);
    container = renderResults.container;
  });

  it("Render Courses container and childs", () => {
    const coursesHeading = screen.getByRole("heading", { name: /Cursos/i });
    expect(coursesHeading).toBeInTheDocument();

    const pictureComponent = screen.getAllByRole("img")[0];
    expect(pictureComponent).toBeInTheDocument();

    const buttonLink = screen.getByRole("link", { name: /Saber más/i });
    expect(buttonLink).toHaveAttribute("href", "/course/1C");
  });

  it("Render all Pictures inside Courses", () => {
    const coursesContainer = screen.getByTestId("courses-container");
    const pictures = within(coursesContainer).getAllByRole("img");
    expect(pictures.length).toBe(courses.length);
  });

  it("Render all Buttons inside Courses", () => {
    const coursesContainer = screen.getByTestId("courses-container");
    const buttons = within(coursesContainer).getAllByRole("link", {
      name: /Saber más/i,
    });
    expect(buttons.length).toBe(courses.length);
  });
});
