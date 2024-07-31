import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Link href="/" data-cy="product-link">
          상품 목록
        </Link>{' '}
        |{' '}
        <Link href="/cart" data-cy="cart-link">
          장바구니
        </Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}
