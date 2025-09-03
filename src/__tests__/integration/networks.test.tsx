import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Networks } from "@/components";

describe("Component <Networks />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Networks />);
    container = renderResults.container;
  });

  it("Render 'div' tag", () => {
    expect(container.querySelectorAll("div").length).toBe(6);
  });

  it("Render 'h1' tag", () => {
    expect(container.querySelectorAll("h1").length).toBe(2);
  });

  it("Render 'button' tag", () => {
    expect(container.querySelectorAll("button").length).toBe(4);
  });

  it("Render 'a' tag", () => {
    expect(container.querySelectorAll("a").length).toBe(4);
  });

  it("Render text", () => {
    const textView = screen.getByRole("heading", {
      name: /Da el primer paso hacia tus metas financieras/i,
    });
    expect(textView).toBeInTheDocument();
  });
});

describe("Button have correct env URLs", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Networks />);
    container = renderResults.container;
  });

  it("Button Facebook has correct href", () => {
    const btnFacebook = screen.getByRole("link", { name: "Facebook" });
    expect(btnFacebook).toHaveAttribute(
      "href",
      process.env.NEXT_PUBLIC_FACEBOOK_URL
    );
  });

  it("Button Linkedin has correct href", () => {
    const btnLinkedin = screen.getByRole("link", { name: "Linkedin" });
    expect(btnLinkedin).toHaveAttribute(
      "href",
      process.env.NEXT_PUBLIC_LINKEDIN_URL
    );
  });

  it("Button Tiktok has correct href", () => {
    const btnTiktok = screen.getByRole("link", { name: "Tiktok" });
    expect(btnTiktok).toHaveAttribute(
      "href",
      process.env.NEXT_PUBLIC_TIKTOK_URL
    );
  });
});

describe("Action buttons at <Networks />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Networks />);
    container = renderResults.container;
  });

  it("Button Gmail", async () => {
    const gmailLink = screen.getByRole("link", { name: "Gmail" });
    expect(gmailLink).toHaveAttribute(
      "href",
      `mailto:${
        process.env.NEXT_PUBLIC_GMAIL
      }.com?subject=Curso%20Binance%20desde%200&body=Curso%20Binance%20mensaje%20desde%200`
    );
    await userEvent.click(gmailLink);
    expect(gmailLink).toBeInTheDocument();
  });

  it("Button Facebook", async () => {
    const facebookLink = screen.getByRole("link", { name: "Facebook" });
    expect(facebookLink).toHaveAttribute(
      "href",
      process.env.NEXT_PUBLIC_FACEBOOK_URL
    );
    await userEvent.click(facebookLink);
    expect(facebookLink).toBeInTheDocument();
  });

  it("Button Linkedin", async () => {
    const linkedinLink = screen.getByRole("link", { name: "Linkedin" });
    expect(linkedinLink).toHaveAttribute(
      "href",
      process.env.NEXT_PUBLIC_LINKEDIN_URL
    );
    await userEvent.click(linkedinLink);
    expect(linkedinLink).toBeInTheDocument();
  });

  it("Button Tiktok", async () => {
    const tiktokLink = screen.getByRole("link", { name: "Tiktok" });
    expect(tiktokLink).toHaveAttribute(
      "href",
      process.env.NEXT_PUBLIC_TIKTOK_URL
    );
    await userEvent.click(tiktokLink);
    expect(tiktokLink).toBeInTheDocument();
  });
});

describe("Styles <Networks />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Networks />);
    container = renderResults.container;
  });

  it("Div 1 has classes", () => {
    const divStyles = container.querySelector("div");
    expect(divStyles).toHaveClass(
      "md:flex",
      "md:flex-col",
      "md:justify-center",
      "md:items-center"
    );
  });

  it("h1 has classes", () => {
    const h1Styles = container.querySelector("h1");
    expect(h1Styles).toHaveClass("md:text-[40px]");
  });
});

describe("Integration - <Networks /> with <Contact />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResults = render(<Networks />);
    container = renderResults.container;
  });

  it("Render Networks with Contact inside", () => {
    const father = container.querySelector("#contact");
    expect(father).toBeInTheDocument();

    const child = screen.getByRole("button", { name: /Contacto/i });
    expect(father).toContainElement(child);
  });

  it("Networks and Contact can interact", () => {
    const buttonElement = screen.getByLabelText("Gmail");
    expect(buttonElement).toHaveAttribute(
      "href",
      `mailto:${process.env.NEXT_PUBLIC_GMAIL}.com?subject=Curso%20Binance%20desde%200&body=Curso%20Binance%20mensaje%20desde%200`
    );
  });
});
