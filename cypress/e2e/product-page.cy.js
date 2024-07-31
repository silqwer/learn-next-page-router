describe('상품 목록 페이지', () => {
  beforeEach(() => {
    // prepare - 사전작업
    cy.visit('/');
  });

  it('페이지에 진입하면 상품 목록이 표시된다. ', () => {
    cy.getByCy('product-item').should('be.visible');
  });

  it('상품 목록에서 상품을 클릭하면 상품 상세 페이지로 이동한다.', () => {
    cy.getByCy('product-item').first().click();
    cy.url().should('include', '/products/');
  });

  it('네비게이션바의 장바구니 링크를 클릭하면 장바구니 페이지로 이동한다.', () => {
    // action - 인터렉션
    cy.getByCy('cart-link').click();

    // assertion - 검증
    cy.url().should('include', '/cart');
    cy.getByCy('cart-header').should('be.visible');
  });
});
