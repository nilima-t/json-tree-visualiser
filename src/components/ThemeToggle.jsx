import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="bg-gray-700 text-white px-4 py-2 rounded mb-3"
        >
            {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
    );
}
