interface ILink {
    text: string,
    link: string
}

export const links: Record<string, ILink> = {
    products: {
        text: 'All products',
        link: "/",
    },
    product: {
        text: 'Product',
        link: "/:id",
    },
    cart: {
        text: 'Cart',
        link: '/cart'
    },
};

export const {products, product, cart} = links