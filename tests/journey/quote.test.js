describe("User visits the quote page", () => {
  it("can display a single quote", () => {
    cy.visit("/quotes/1593013680");
    cy.title().should((title) => {
      expect(title).to.equal("Quote");
    });
    cy.get("[data-cy=quote]").should(($div) => {
      expect($div).to.have.lengthOf(1);
    });
  });
});
