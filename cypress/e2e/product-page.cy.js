describe('상품 목록 페이지', () => {
  it('페이지에 진입하면 상품 목록이 표시된다. ', () => {
    cy.visit('http://localhost:3000');
    cy.getByCy('product-item').should('be.visible');
  });
});
