import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import "./css/reset.css";
import SortPage from "./pages/SortPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <div className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-100">
            <SortPage />
        </div>
    </React.StrictMode>
);
