import { createCartItem } from '@/api';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './ProductInfo.module.css';

export default function ProductInfo({ productDetail }) {
  const router = useRouter();
  const { name, imageUrl, price } = productDetail;

  const addCart = async () => {
    // 1. 장바구니에 아이템을 담는 API 함수 호출
    const response = await createCartItem(productDetail);
    console.log(response);
    alert('장바구니에 추가됨');
    // 2. 장바구니 페이지로 이동
    router.push('/cart');
  };

  return (
    <div className={styles.container}>
      <div>
        <Image
          src={imageUrl}
          width={250}
          height={250}
          alt={name}
          data-cy="product-image"
        />
      </div>
      <div className={styles.description}>
        <p data-cy="product-name">{name}</p>
        <p data-cy="product-price">{price}</p>
        <button onClick={addCart} data-cy="add-cart-button">
          장바구니에 담기
        </button>
      </div>
    </div>
  );
}
