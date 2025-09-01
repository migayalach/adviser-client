import { render, screen } from "@testing-library/react";
import { Navbar } from "@/components";
import { siteConfig } from "@config/site";

describe("<Navbar />", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  it("renders the home link", () => {
    const homeLink =
      screen.getByRole("link", { name: "" }) ||
      screen.getByRole("link", { hidden: true });
    const link = Array.from(screen.getAllByRole("link")).find(
      (a) => a.getAttribute("href") === "/"
    );
    expect(link).toBeInTheDocument();
  });

  it("renders all nav items in desktop view", () => {
    siteConfig.navItems.forEach((item) => {
      const navLink = screen.getByText(item.label);
      expect(navLink).toBeInTheDocument();
      expect(navLink.closest("a")).toHaveAttribute("href", item.href);
    });
  });
});
