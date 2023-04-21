import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface arrSizeState {
    value: number;
}

const initialState: arrSizeState = {
    value: 2,
};

export const arraySizeSlice = createSlice({
    name: "arraySize",
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    },
});

export const { setValue } = arraySizeSlice.actions;
export default arraySizeSlice.reducer;
