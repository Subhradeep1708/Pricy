"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const saved = localStorage.getItem("theme") || "light";
        document.documentElement.classList.toggle("dark", saved === "dark");
        queueMicrotask(() => setTheme(saved));
    }, []);

    const toggle = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);

        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button
            onClick={toggle}
            className="text-foreground rounded "
        >
            {theme === "dark" ? <Sun /> : <Moon />}
        </button>
    );
}
