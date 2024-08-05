describe('상품 상세 페이지', () => {
  beforeEach(() => {
    cy.visit('/products/0');
  });

  it('상품 상세 페이지로 진입하면 상품의 이름과 가격이 정상적으로 표시된다.', () => {
    cy.getByCy('product-image').should('be.visible');
    cy.getByCy('product-name').should('be.visible');
    cy.getByCy('product-price').should('be.visible');
  });

  it('장바구니에 담기 버튼을 클릭하면 "장바구니에 추가됨"이 표시된다.', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);

    cy.getByCy('add-cart-button').click();
    cy.then(() => {
      expect(stub.getCall(0)).to.be.calledWith('장바구니에 추가됨');
    });
  });

  it.only('장바구니에 담기 버튼을 클릭하면 장바구니 페이지로 이동한다.', () => {
    cy.getByCy('add-cart-button').click();
    cy.url().should('include', '/cart');
  });
});
