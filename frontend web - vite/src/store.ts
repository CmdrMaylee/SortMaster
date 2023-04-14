import { configureStore, createSlice } from "@reduxjs/toolkit";

export const arraySizeSlice = createSlice({
    name: "arraySize",
    initialState: {
        arrSize: 2,
    },
    reducers: {
        setValue: (state, action) => {
            state.arrSize += action.payload;
        },
    },
});

const store = configureStore({
    reducer: {
        arraySizeInput: arraySizeSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
