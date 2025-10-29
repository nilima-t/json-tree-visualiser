import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");

    return (
        <div className="flex gap-2 my-2">
            <input
                type="text"
                placeholder="Search JSON path (e.g. $.user.name)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border rounded p-2 w-full dark:bg-gray-700 dark:text-white"
            />
            <button
                onClick={() => onSearch(query)}
                className="bg-green-500 text-white px-4 py-2 rounded"
            >
                Search
            </button>
        </div>
    );
}
