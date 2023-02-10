import React from "react";
import ReactDOM from "react-dom/client";
import "./css/reset.css";
import Header from "./pages/Header";
import SortPage from "./pages/SortPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <div className="h-screen bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-100">
            <div className="mx-6">
                <Header />
                <SortPage />
            </div>
        </div>
    </React.StrictMode>
);
