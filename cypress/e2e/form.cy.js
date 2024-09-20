describe.skip("testing form", () => {
  beforeEach(() => {
    cy.visit("/forms");
    cy.get("form").as("login-form");
    cy.get("@login-form").find("input").as("form-input");
  });
  it.skip("should have a header", () => {
    cy.contains(/testing forms/i);
  });
  it.skip("should have a form", () => {
    cy.get("@login-form").should("exist");
  });
  it.skip("test form subscribe successfully", () => {
    cy.get("@form-input").should("exist").type("m@gmail.com");
    cy.contains(/successfully subbed/i).should("not.exist");
    cy.get("@login-form").submit();
    cy.contains(/successfully subbed/i).should("exist");
    cy.wait(3000);
    cy.contains(/successfully subbed/i).should("not.exist");
  });
  it.skip("test form dont subscribe successfully", () => {
    cy.get("@form-input").type("m@gmail.io");
    cy.contains(/Invalid email/i).should("not.exist");
    cy.get("@login-form").submit();
    cy.contains(/Invalid email/i).should("exist");
    cy.wait(3000);
    cy.contains(/Invalid email/i).should("not.exist");
  });
});
