const { default: ItemsAccordion } = require("@/app/components/Accordion");
const { default: items } = require("@/dummy/items");

describe("accordian testing", () => {
  it("accordian item", () => {
    cy.mount(<ItemsAccordion items={items} />);
  });
});
