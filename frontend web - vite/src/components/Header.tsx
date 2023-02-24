import { useState } from "react";

export default function Header() {
    const themeOptions = ["Automagic", "Brightenstein", "Radula"];

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
            <div className="rounded-b-2xl border-b-4 border-green-500 bg-blue-300 dark:bg-slate-600">
                <div className="flex justify-between mx-4">
                    <div id="themeSection">
                        <p>Colour Scheme</p>
                        <select
                            value={currentTheme}
                            onChange={(event) => {
                                onThemeChange(event.target.value);
                            }}
                            className="bg-white rounded dark:bg-slate-800"
                        >
                            {themeOptions.map((x, i) => (
                                <option key={i}>{x}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-2xl lg:text-6xl" style={{ fontFamily: "verdana" }}>
                            SortMaster
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-2xl xl:text-6xl" style={{ fontFamily: "verdana" }}>
                            ソート マスター
                        </p>
                    </div>
                    <p className="my-auto">By McJeffrey</p>
                </div>
            </div>
        </>
    );
}
