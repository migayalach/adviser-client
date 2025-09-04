describe("services/id", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/service/1S");
  });

  it("Should display the title", () => {
    cy.get("h1").contains("Planification Financiera");
  });

  it("Should render image with correct alt", () => {
    cy.get('img[alt="Planification Financiera"]').should("be.visible");
  });
});
