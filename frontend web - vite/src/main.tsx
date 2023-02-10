import React from "react";
import ReactDOM from "react-dom/client";
import "./css/reset.css";
import Header from "./pages/Header";
import SortPage from "./pages/SortPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <div className="bg-white dark:bg-black">
            <Header />
            <SortPage />
        </div>
    </React.StrictMode>
);
