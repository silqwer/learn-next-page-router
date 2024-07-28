describe("카운터 앱", () => {
  it("카운터 페이지에 방문한다", () => {
    cy.visit("http://localhost:3000/count");
  });

  it("카운터 페이지에 방문하면 0이 표시된다", () => {
    cy.visit("http://localhost:3000/count");
    cy.get("[data-cy=counter]").should("have.text", "0");
  });

  it("카운터를 증가시킬 수 있다", () => {
    cy.visit("http://localhost:3000/count");
    cy.get("button").contains("+").click();
    cy.get("[data-cy=counter]").should("have.text", "1");
  });

  it("카운터를 감소시킬 수 있다", () => {
    cy.visit("http://localhost:3000/count");
    cy.get("button").contains("+").click();
    cy.get("button").contains("-").click();
    cy.get("[data-cy=counter]").should("have.text", "0");
  });

  it("카운터를 증가시키고 감소시킬 수 있다", () => {
    cy.visit("http://localhost:3000/count");
    cy.get("button").contains("+").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("-").click();
    cy.get("[data-cy=counter]").should("have.text", "1");
  });

  it("카운터를 감소시키고 증가시킬 수 있다", () => {
    cy.visit("http://localhost:3000/count");
    cy.get("button").contains("-").click();
    cy.get("button").contains("-").click();
    cy.get("button").contains("+").click();
    cy.get("[data-cy=counter]").should("have.text", "-1");
  });

  it("카운터를 10번 증가시킬 수 있다", () => {
    cy.visit("http://localhost:3000/count");
    for (let i = 0; i < 10; i++) {
      cy.get("button").contains("+").click();
    }
    cy.get("[data-cy=counter]").should("have.text", "10");
  });

  it("카운터를 10번 감소시킬 수 있다", () => {
    cy.visit("http://localhost:3000/count");
    for (let i = 0; i < 10; i++) {
      cy.get("button").contains("-").click();
    }
    cy.get("[data-cy=counter]").should("have.text", "-10");
  });
});
