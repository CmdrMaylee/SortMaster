import { useState } from "react";

export default function Header() {
    const themeOptions = ["Automagic", "Brightula", "Radula"];

    const [currentTheme, setCurrentTheme] = useState(themeOptions[0]);

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
            <div className="bg-gray-200">
                <p>Theme</p>
                <select
                    value={currentTheme}
                    onChange={(event) => {
                        onThemeChange(event.target.value);
                    }}
                >
                    {themeOptions.map((x, i) => (
                        <option key={i}>{x}</option>
                    ))}
                </select>
            </div>
            <div className="bg-green-500 w-full h-1"></div>
        </>
    );
}
