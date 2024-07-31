describe('상품 목록 페이지', () => {
  it('페이지에 진입하면 상품 목록이 표시된다. ', () => {
    cy.visit('/');
    cy.getByCy('product-item').should('be.visible');
  });

  it('상품을 클릭하면 상품 상세 페이지로 이동한다.', () => {
    cy.visit('/');
    cy.getByCy('product-item').first().click();
    cy.url().should('include', '/products/');
  });
});
