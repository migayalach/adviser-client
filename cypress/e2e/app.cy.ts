describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should image profile", () => {
    cy.get("img").should("be.visible").and("have.attr", "alt", "profile");
  });

  it("Should display the title", () => {
    cy.get("h1").contains("Stephani Bustillos");
  });

  it("Should display the second title", () => {
    cy.get("p").contains("Asesor Financiero");
  });

  it("Should title at section about", () => {
    cy.get("h1").contains("Conoce a Stephani");
  });

  it("Should information about Profile", () => {
    cy.get("p").contains(
      "Soy una profesional especialista en Ingeniería, Economía y Finanzas. Cuento con una amplia experiencia en el sector bancario y financiero, y hoy quiero compartir todos mis conocimientos con ustedes!"
    );
  });

  it("Should display service title", () => {
    cy.get("h1").contains("Servicios y Asesorias");
  });

  it("Show display Courses", () => {
    cy.get("h1").contains("Cursos");
  });

  it("Show display Feedback", () => {
    cy.get("h1").contains("¿Que opina la gente de nosotros?");
  });

  it("Show display Networks", () => {
    cy.get("h1").contains("Da el primer paso hacia tus metas financieras");
  });
});
