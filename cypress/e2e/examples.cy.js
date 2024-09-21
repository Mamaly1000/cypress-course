describe.skip("testing examples", () => {
  beforeEach(() => cy.visit("/examples"));
  it.skip("multi page testing", () => {
    cy.get("[data-test='/examples']").click();
    cy.location("pathname").should("equal", "/examples");
  });
  it.skip("intercepts the http data", () => {
    let message = "successfully intercepted request";
    cy.intercept("POST", "http://localhost:3000/examples", {
      body: { message },
    }).as("intercepting");
    cy.get("[data-test='intercept-button']").click();
    cy.wait("@intercepting");
    cy.get("[data-test='intercept-message']").should("exist");
    cy.get("[data-test='intercept-message']").should("contain.text", message);
  });
  // some usefull cypress methods
  // within()  => scopes all subsequents cypress commands to within an element.useful when working within a particulargroup of elements such as forms
  // request() => is a helpful method anytime you need to make an http req within your tests and perform expectations against it.
  // invoke()  => invoke a function on the previously yielded subject.
  // its()     => get the properties value on the previously yielded subject.
  it.skip("test grudge app", () => {
    cy.get("[data-test='grudge-app']").as("app");
    cy.get("[data-test='grudge-list']").as("grudge-list");
    cy.get("@app").should("exist");
    cy.get("@grudge-list").should("exist");
    cy.get("@app").within(() => {
      cy.contains("Add Some Grudges");
      cy.get("@grudge-list").within(() =>
        cy.get("li").should("have.length", 0)
      );
      cy.get("[test-data='grudge-input']").within(() => {
        cy.get("input").type("new grudge");
      });
      cy.get("[test-data='add-grudge']").click();
      cy.get("@grudge-list").within(() =>
        cy.get("li").should("have.length", 1)
      );
    });
  });
});
