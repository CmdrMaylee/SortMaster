import React from "react";
import ReactDOM from "react-dom/client";
import "./css/reset.css";
import Header from "./components/Header";
import SortPage from "./pages/SortPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <div className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-100">
            <div className="md:mx-6">
                <Header />
                <SortPage />
            </div>
        </div>
    </React.StrictMode>
);
