import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IProductsState as State} from "types/products";
import {getProduct, getProducts, getSizes} from "../../services/api";


export const getProductsThunk = createAsyncThunk(
    'getProductsThunk',
    async (_, thunkAPI) => {
        try {
            const response = await getProducts()
            return response
        } catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    }
)

export const getProductThunk = createAsyncThunk(
    'getProductThunk',
    async (id: number, thunkAPI) => {
        try {
            const response = await getProduct(id)
            return response
        } catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    }
)

export const getSizesThunk = createAsyncThunk(
    'getSizesThunk',
    async (_, thunkAPI) => {
        try {
            const response = await getSizes()
            return response
        } catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    }
)


export const initialState: State = {
    loading: false,
    products: null,
    currentProduct: null,
    sizes: null
};

const productsSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProductsThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getProductsThunk.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            })
            .addCase(getProductsThunk.rejected.type, (state) => {
                state.loading = false
            })

            .addCase(getProductThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getProductThunk.fulfilled, (state, action) => {
                state.loading = false
                state.currentProduct = action.payload
            })
            .addCase(getProductThunk.rejected.type, (state) => {
                state.loading = false
            })

            .addCase(getSizesThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getSizesThunk.fulfilled, (state, action) => {
                state.loading = false
                state.sizes = action.payload
            })
            .addCase(getSizesThunk.rejected.type, (state) => {
                state.loading = false
            })

    },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
