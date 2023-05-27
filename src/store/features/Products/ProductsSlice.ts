import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IProductItem, IProducts } from './Interfaces/IProducts';
import { product } from '../../../constants/links';

// const productsUrl = 'https://fakestoreapi.com/products';

export const getStoreProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ shop }, { rejectWithValue }) => {
    try {
      const response = await fetch(shop);

      if (!response.ok) {
        throw new Error('Server Error!');
      }
      const data = await response.json();
      const [shopName] = shop.match(/\w+(?=\.com)/);
      if (data?.products) {
        const { products } = data;
        products.map((product) => {
          product.id = `${shopName}/${product.id}`;
          product.image = product.thumbnail;
        });
        return products;
      } else {
        const products = data;
        products.map((product) => {
          product.id = `${shopName}/${product.id}`;
        });
        return products;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState: IProducts = {
  shop: 'https://fakestoreapi.com/products',
  products: [],
  cart: [],
  loading: true,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    setShop: (state, { payload }) => {
      state.shop = payload;
    },
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStoreProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getStoreProducts.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.loading = false;
        state.products = payload;
      }
    );
    builder.addCase(
      getStoreProducts.rejected,
      (state, { payload }: PayloadAction<any>) => {
        state.loading = false;
        state.error = payload;
      }
    );
  },
});

export const { setShop, addToCart } = productsSlice.actions;

export default productsSlice.reducer;
