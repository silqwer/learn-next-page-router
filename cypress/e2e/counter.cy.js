describe('카운터 앱', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/count');
  });

  it('카운터 페이지에 방문한다', () => {});

  it('카운터 페이지에 방문하면 0이 표시된다', () => {
    cy.getByCy('counter').should('have.text', '0');
  });

  it('카운터를 증가시킬 수 있다', () => {
    cy.getByCy('add-button').contains('+').click();
    cy.getByCy('counter').should('have.text', '1');
  });

  it('카운터를 감소시킬 수 있다', () => {
    cy.getByCy('add-button').click();
    cy.getByCy('sub-button').click();
    cy.getByCy('counter').should('have.text', '0');
  });

  it('카운터를 증가시키고 감소시킬 수 있다', () => {
    cy.getByCy('add-button').click();
    cy.getByCy('add-button').click();
    cy.getByCy('sub-button').click();
    cy.getByCy('counter').should('have.text', '1');
  });

  it('카운터를 감소시키고 증가시킬 수 있다', () => {
    cy.getByCy('sub-button').click();
    cy.getByCy('sub-button').click();
    cy.getByCy('add-button').click();
    cy.getByCy('counter').should('have.text', '-1');
  });

  it('카운터를 10번 증가시킬 수 있다', () => {
    for (let i = 0; i < 10; i++) {
      cy.getByCy('add-button').click();
    }
    cy.getByCy('counter').should('have.text', '10');
  });

  it('카운터를 10번 감소시킬 수 있다', () => {
    for (let i = 0; i < 10; i++) {
      cy.getByCy('sub-button').click();
    }
    cy.getByCy('counter').should('have.text', '-10');
  });
});
