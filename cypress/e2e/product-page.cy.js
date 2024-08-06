import { THREE_PRODUCT_ITEMS } from '../fixtures';

describe('상품 목록 페이지', () => {
  beforeEach(() => {
    // prepare - 사전작업
    // 인증
    // API 모킹
    cy.visit('/');
  });

  it('페이지에 진입하면 상품 목록이 표시된다. ', () => {
    cy.getByCy('product-item').should('be.visible');
  });

  it('네비게이션바의 장바구니 링크를 클릭하면 장바구니 페이지로 이동한다.', () => {
    // action - 인터렉션
    cy.getByCy('cart-link').click();

    // assertion - 검증
    cy.url().should('include', '/cart');
    cy.getByCy('cart-header').should('be.visible');
  });

  it('상품 목록에서 상품을 클릭하면 상품 상세 페이지로 이동한다.', () => {
    cy.getByCy('product-item').first().click();
    cy.url().should('include', '/products/');
  });

  // api 모킹
  it('상품 목록이 3개면 화면에 3개 상품이 표시된다.', () => {
    // 페이지 방문전에 미리 API를 모킹한다.
    cy.intercept('/products', THREE_PRODUCT_ITEMS).as('getProducts');
    cy.visit('/');
    cy.wait('@getProducts'); // 네트워크 요청이 완료될 때까지 대기
    cy.getByCy('product-item').should('have.length', 3);
  });

  // it('상품 목록이 3개면 화면에 3개 상품이 표시된다.', () => {
  //   cy.intercept('GET', '/products', {
  //     fixture: 'products.json',
  //   });
  //   cy.visit('/');
  //   cy.getByCy('product-item').should('have.length', 3);
  // });
});
