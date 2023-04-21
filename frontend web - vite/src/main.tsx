import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./css/reset.css";
import SortPage from "./pages/SortPage";
import { store } from "./state/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <div className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-100">
                <SortPage />
            </div>
        </Provider>
    </React.StrictMode>
);
