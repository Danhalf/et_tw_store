interface IProductData {
    id: string | number;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    stock?: number;
}

interface IProductItem extends IProductData {
    count: number;
    total: number;
}

interface IProducts {
    shop: string;
    products: IProductData | [];
    cart: IProductItem | any[];
    loading: boolean;
    error: string | null;
}

export { IProductData, IProductItem, IProducts };