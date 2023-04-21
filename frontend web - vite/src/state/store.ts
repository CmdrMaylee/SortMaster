import { configureStore } from "@reduxjs/toolkit";
import arraySizeReducer from "./arrSizeSlice";
import sortReportReducer from "./sortReportSlice";

export const store = configureStore({
    reducer: {
        arrSize: arraySizeReducer,
        currentSortReport: sortReportReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
