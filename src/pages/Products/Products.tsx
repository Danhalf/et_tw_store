import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStoreProducts } from '../../store/features/Products/ProductsSlice';
import { ProductItem } from '../../components/ProductItem/ProductItem.component';

// export async function http<T>(request: string): Promise<T> {
//     const response = await fetch(request);
//     const body = await response.json();
//     return body;
// }

export const Products: FC = () => {
  const dispatch = useDispatch();
  const { loading, error, products, shop } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getStoreProducts({ shop }));
  }, [dispatch, shop]);

  return (
    <div className="products mt-10 container">
      <ul className="flex justify-around flex-wrap md:justify-between gap-x-8 gap-y-12">
        {loading && <p>Loading...</p>}
        {error ? (
          <h2>Error: {error}</h2>
        ) : (
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        )}
      </ul>
    </div>
  );
};
