import { render, screen, within } from "@testing-library/react";
import { Services } from "@/components";
import { services } from "@/mocks";

describe("Component <Services />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Services />);
    container = renderResults.container;
  });

  it("Render div tag", () => {
    expect(container.querySelectorAll("div").length).toBe(17);
  });

  it("Render h1 tag", () => {
    expect(container.querySelectorAll("h1").length).toBe(1);
  });
});

describe("Render text", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Services />);
    container = renderResults.container;
  });

  it("Show text h1 tag", () => {
    expect(screen.getByText(/Servicios y Asesorias/i)).toBeInTheDocument();
  });
});

describe("Services has correct class", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Services />);
    container = renderResults.container;
  });

  it("Div-1 has classes", () => {
    const divElement = container.querySelectorAll("div");
    expect(divElement[0].className).toBe(
      "container-one-light p-5 md:flex md:flex-col"
    );
  });

  it("Div-2 has classes", () => {
    const divElement = container.querySelectorAll("div");
    expect(divElement[1].className).toBe(
      "flex flex-col md:flex-row md:justify-evenly md:items-center md:py-4 sm:flex-wrap sm:flex-row sm:justify-evenly sm:ml-4"
    );
  });

  it("h1 has classes", () => {
    const hElement = container.querySelector("h1");
    expect(hElement).toHaveClass(
      "text-[27px]",
      "text-center",
      "md:text-[40px]",
      "font-semibold mb-2"
    );
  });
});

describe("Integration - <Services /> with <Cards />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Services />);
    container = renderResults.container;
  });

  it("Render Services container and heading", () => {
    const servicesContainer = container.querySelector("#services");
    expect(servicesContainer).toBeInTheDocument();
    const heading = screen.getByRole("heading", {
      name: /Servicios y Asesorias/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("Render all Cards inside Services", () => {
    const servicesContainer = screen.getByTestId("services-container");
    const cards = within(servicesContainer).getAllByRole("img");
    expect(cards.length).toBe(services.length);
  });

  it("Each Card has correct content", () => {
    services.forEach(({ title }) => {
      const cardTitle = screen.getByText(title);
      expect(cardTitle).toBeInTheDocument();
    });
  });
});
