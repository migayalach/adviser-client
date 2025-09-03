import { render } from "@testing-library/react";
import Home from "@/app/page";

describe("Page has correct class", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Home />);
    container = renderResults.container;
  });

  it("Section has classes", () => {
    const sectionTag = container.querySelector("section");
    expect(sectionTag).toHaveClass("flex", "flex-col", "justify-center");
  });
});

describe("Integration - <Home /> with all child components", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Home />);
    container = renderResults.container;
  });

  it("Render Services container and childs", () => {
    const aboutMeComponent = container.querySelector("#about-me");
    expect(aboutMeComponent).toBeInTheDocument();

    const personaComponent = container.querySelector("#personal-skills");
    expect(personaComponent).toBeInTheDocument();

    const servicesComponent = container.querySelector("#services");
    expect(servicesComponent).toBeInTheDocument();

    const coursesComponent = container.querySelector("#courses");
    expect(coursesComponent).toBeInTheDocument();

    const feedbackComponent = container.querySelector("#feedback");
    expect(feedbackComponent).toBeInTheDocument();

    const networksComponent = container.querySelector("#networks");
    expect(networksComponent).toBeInTheDocument();
  });
});
