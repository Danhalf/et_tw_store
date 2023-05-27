import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStoreProducts } from '../../store/features/Products/ProductsSlice';
import { ProductItem } from '../../components/ProductItem/ProductItem.component';

// export async function http<T>(request: string): Promise<T> {
//     const response = await fetch(request);
//     const body = await response.json();
//     return body;
// }

export const Cart: FC = () => {
  const dispatch = useDispatch();
  const { loading, error, shop, cart } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getStoreProducts({ shop }));
  }, [dispatch, shop]);

  return (
    <section className="cart mt-10 container">
      <ul className="flex justify-around flex-wrap md:justify-between gap-x-8 gap-y-12">
        {loading && <p>Loading...</p>}
        {error ? (
          <h2>Error: {error}</h2>
        ) : (
          cart.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        )}
      </ul>
    </section>
  );
};
