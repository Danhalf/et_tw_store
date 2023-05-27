import { FC } from 'react';
import { BsCashCoin } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { IProductData } from '../../store/features/Products/Interfaces/IProducts';
import { addToCart } from '../../store/features/Products/ProductsSlice';

export const ProductItem: FC = ({ product }: any) => {
  const { id, image, title, price }: IProductData = product;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product));
  };

  return (
    <li
      key={id}
      className="w-64 cursor-pointer min-h-80 mb-6 flex flex-col justify-between text-center border p-2 border-slate-400 relative transition-all hover:border-slate-900 hover:bg-gradient-to-br hover:via-white from-white to-slate-100"
    >
      <img className="h-1/2" src={image} alt={title} />
      <h3 className="">{title}</h3>
      <div>Price: {price} $</div>
      <button
        onClick={addToCartHandler}
        className="flex p-4 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 items-center border bg-white hover:bg-slate-500 border-slate-500 rounded-full justify-center mx-auto"
      >
        <BsCashCoin size={30} />
      </button>
    </li>
  );
};
