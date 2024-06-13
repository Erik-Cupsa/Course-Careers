import React from "react";

// Square component that renders each individual square
export default function Square({ value, onClick }) {
    return (
        <button className="square w-16 h-16 bg-gray-200 text-lg font-bold border-2 border-gray-400" onClick={onClick}>
            {value}
        </button>
    );
}
