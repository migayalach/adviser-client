import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FeedBack from "@/components/FeedBack";
import { feedBack } from "@/mocks";

describe("<FeedBack />", () => {
  it("See the title", () => {
    render(<FeedBack />);
    expect(
      screen.getByRole("heading", {
        name: /¿que opina la gente de nosotros\?/i,
      })
    ).toBeInTheDocument();
  });

  it("Loading 5 items on startup", () => {
    render(<FeedBack />);
    const items = screen.getAllByRole("button", { expanded: false }); // AccordionItem headers
    expect(items).toHaveLength(5);
  });

  it("Loading 5 more items when clicking 'Cargar mas'", async () => {
    render(<FeedBack />);
    const button = screen.getByRole("button", { name: /cargar mas/i });
    await userEvent.click(button);
    const items = screen.getAllByRole("button", { expanded: false });
    expect(items).toHaveLength(10);
  }, 15000);

  it("Disable the button when there are no more items", async () => {
    render(<FeedBack />);
    const button = screen.getByRole("button", { name: /cargar mas/i });
    // Click until you get all the items
    const totalClicks = Math.ceil(feedBack.length / 5);
    for (let i = 0; i < totalClicks; i++) {
      if (!button.hasAttribute("disabled")) {
        await userEvent.click(button);
      }
    }
    expect(button).toBeDisabled();
  });

  it("Show names and comments", async () => {
    render(<FeedBack />);
    // Validate the first element of the mock
    const firstAccordionHeader = screen.getByText(feedBack[0].name);
    await userEvent.click(firstAccordionHeader);
    
    expect(screen.getByText(feedBack[0].comment)).toBeInTheDocument();
    expect(screen.getByText(feedBack[0].name)).toBeInTheDocument();
  });

  it("Apply responsive classes to the title", () => {
    render(<FeedBack />);
    const heading = screen.getByRole("heading", {
      name: /¿que opina la gente de nosotros\?/i,
    });
    expect(heading).toHaveClass("text-[27px]", "md:text-[40px]");
  });
});
