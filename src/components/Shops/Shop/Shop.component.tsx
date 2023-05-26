import {FC} from "react";
import {useDispatch} from "react-redux";
import {setShop} from "../../../store/features/Products/ProductsSlice";

export const Shop: FC = ({title, link}) => {
    const dispatch = useDispatch();

    const changeShopHandler = () => {
        dispatch(setShop(link))
    }

    return (
        <li className='py-2'>
            <button className='w-full py-1 px-4 rounded bg-green-300 text-white'
                    onClick={changeShopHandler}>{title}</button>
        </li>
    );
}
