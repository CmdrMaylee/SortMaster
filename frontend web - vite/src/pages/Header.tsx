import { useState } from "react";

export default function Header() {
    const themeOptions = ["Automagic", "Brightula", "Radula"];

    let localTheme: string = localStorage.theme;

    if (localTheme == "light") localTheme = themeOptions[1];
    else if (localTheme == "dark") localTheme = themeOptions[2];
    else localTheme = themeOptions[0];

    const [currentTheme, setCurrentTheme] = useState(localTheme);

    const onThemeChange = (theme: string) => {
        setCurrentTheme(theme);
    };

    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    if (currentTheme == themeOptions[0]) localStorage.removeItem("theme");
    if (currentTheme == themeOptions[1]) localStorage.theme = "light";
    if (currentTheme == themeOptions[2]) localStorage.theme = "dark";

    return (
        <>
            <div className="rounded-b-2xl border-b-4 border-green-500 bg-slate-200 dark:bg-slate-600">
                <div className="flex justify-between mx-4">
                    <div id="themeSection">
                        <p>Theme</p>
                        <select
                            value={currentTheme}
                            onChange={(event) => {
                                onThemeChange(event.target.value);
                            }}
                            className="bg-slate-300 rounded dark:bg-slate-800"
                        >
                            {themeOptions.map((x, i) => (
                                <option key={i}>{x}</option>
                            ))}
                        </select>
                    </div>
                    <p className="text-6xl" style={{ fontFamily: "verdana" }}>
                        SortMaster
                    </p>
                    <p>By McJeffrey</p>
                </div>
            </div>
        </>
    );
}
