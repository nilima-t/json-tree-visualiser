import { useState } from "react";

export default function JsonInput({ onVisualize, onClear }) {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    const handleVisualize = () => {
        try {
            const parsed = JSON.parse(input);
            setError("");
            onVisualize(parsed);
        } catch {
            setError("Invalid JSON format");
        }
    };

    return (
        <div className="mb-4">
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Paste JSON here...'
                className="w-full h-40 border rounded p-2 dark:bg-gray-800 dark:text-white"
            ></textarea>
            {error && <p className="text-red-500 mt-2">{error}</p>}

            <div className="flex gap-3 mt-3">
                <button
                    onClick={handleVisualize}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Visualize
                </button>
                <button
                    onClick={onClear}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                    Clear
                </button>
            </div>
        </div>
    );
}
