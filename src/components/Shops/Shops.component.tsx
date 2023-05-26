import {FC} from "react";
import {Shop} from "./Shop/Shop.component";
import {shops} from "../../constants/shops";

export const Shops: FC = () => {

    return (
        <ul>
            {
                shops.map(({title, link}) => <Shop title={title} key={link} link={link}/>)
            }
        </ul>
    );
}
