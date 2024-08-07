describe("fundamentals testing", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  });
  it("header renders correctly", () => {
    cy.getDataTest({ dataTestSelector: "fundamentals-header" }).contains(
      /testing fundamentals/i
    );
  });
  it("Accordian works correctly", () => {
    cy.contains(/Your tests will exist in a describe/i).should(
      "not.be.visible"
    );
    cy.getDataTest({ dataTestSelector: "accordian-item-1" }).click();
    cy.contains(/Your tests will exist in a describe/i).should("be.visible");
    cy.getDataTest({ dataTestSelector: "accordian-item-1" })
      .children("[role='button']")
      .click();
    cy.contains(/Your tests will exist in a describe/i).should(
      "not.be.visible"
    );
  });
});
