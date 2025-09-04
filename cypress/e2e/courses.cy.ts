describe("courses/id", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/course/1C");
  });

  it("Should display the title and subtitle", () => {
    cy.get("h1").contains(
      "Curso Básico de Binance - Aprende a Proteger tu Dinero desde Bolivia"
    );
    cy.get("h3").contains(
      "Resguarda tu poder adquisitivo ahorrando en dólares digitales (USDT), sin bancos ni fronteras."
    );
  });

  it("Should display mode, hours, start and cost", () => {
    cy.get("p").contains("Modalidad: 100% Virtual (vía Zoom)");
    cy.get("p").contains("Horario: 19:30 a 21:00");
    cy.get("p").contains("Inicio: Lunes 04 de agosto de 2025");
    cy.get("p").contains("Inversión: Bs. 150.-");
  });

  it("Should render image with correct alt", () => {
    cy.get('img[alt="Binance Desde Cero"]').should("be.visible");
  });

  it("Should display all lessons", () => {
    cy.contains("Día 1 - Introducción a las Criptomonedas");
    cy.contains("¿Qué es el dinero digital?");
    cy.contains("Día 2 - Usa Binance con Seguridad");
    cy.contains("Crea tu cuenta paso a paso");
  });

  it("Should display include and ask section", () => {
    cy.contains("Incluye ejercicios prácticos todos los días");
    cy.contains(
      "Curso pensado para personas que buscan empezar a ahorrar o invertir con bajo riesgo, sin complicaciones técnicas."
    );
    cy.contains("¿Estás lista/o para tomar el control de tu dinero?");
  });
});
