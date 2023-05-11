import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SortReportApiModel } from "../components/SortReport";

export interface arrSizeState {
    value: SortReportApiModel | undefined;
}

const initialState: arrSizeState = {
    value: undefined,
};

export const arraySizeSlice = createSlice({
    name: "arraySize",
    initialState,
    reducers: {
        setReport: (state, action: PayloadAction<SortReportApiModel | undefined>) => {
            state.value = action.payload;
        },
    },
});

export const { setReport } = arraySizeSlice.actions;
export default arraySizeSlice.reducer;
