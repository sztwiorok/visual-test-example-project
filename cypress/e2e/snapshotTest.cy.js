describe("snapshot example", () => {
  it("Take snapshot 1", () => {
    cy.visit("http://host.docker.internal:4000/");
    new Array(1).fill("").forEach((_, index) => {
      cy.takeSnap(`Snapshot ${index}`);
    });
  });
  //
  // it("Take snapshot 2", () => {
  //   Cypress.on("uncaught:exception", (err, runnable) => {
  //     // returning false here prevents Cypress from
  //     // failing the test
  //     return false;
  //   });
  //   cy.visit("https://buddy.works/pricing");
  //   cy.takeSnap("Snapshot 2");
  // });
  //
  // it("Take snapshot 2", () => {
  //   cy.visit("http://localhost:4000/page");
  //   cy.wait(1000);
  //   // cy.visit("https://developer.mozilla.org/");
  //   cy.takeSnap(`Snapshot2`);
  // });
  //
  // it("Take snapshot 4", () => {
  //   cy.visit("https://buddy.works/blog");
  //   cy.takeSnap("Snapshot 4", { widths: [375, 600, 1280] });
  // });

  // it("Take snapshot", () => {
  //   Cypress.on("uncaught:exception", () => {
  //     // returning false here prevents Cypress from
  //     // failing the test
  //     return false;
  //   });
  //   cy.visit("https://buddy.works/sign-up");
  //   // cy.takeSnap("Snapshot google");
  // });
});
