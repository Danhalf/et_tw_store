import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {IProductItem, IProducts} from "./Interfaces/IProducts";

// const productsUrl = 'https://fakestoreapi.com/products';
const productsUrl = 'https://dummyjson.com/products';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch(productsUrl);

        if (!response.ok) {
            throw new Error('Server Error!');
        }

        const {products} = await response.json();
        return products;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});


const initialState: IProducts = {
    products: [],
    cart: [],
    loading: true,
    error: null,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        removeFromCart: (state, { payload }: PayloadAction<IProductItem>) => {
            const { id } = payload;
            console.log(id)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchProducts.fulfilled, (state, { payload }: PayloadAction<any>) => {
            state.loading = false;
            state.products = payload;
        });
        builder.addCase(fetchProducts.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading = false;
            state.error = payload;
        });
    },
});

// export const { addToCart, removeFromCart } = productsSlice.actions;

export default productsSlice.reducer;
