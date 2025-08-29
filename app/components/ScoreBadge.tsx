import React from "react";

interface ScoreBadgeProps {
    score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
    let badgeClass = "";
    let text = "";

    if (score > 69) {
        badgeClass = "bg-badge-green text-green-600";
        text = "Strong";
    } else if (score > 49) {
        badgeClass = "bg-badge-yellow text-yellow-600";
        text = "Good start";
    } else {
        badgeClass = "bg-badge-red text-red-600";
        text = "Needs work";
    }

    return (
        <div
            className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium shadow ${badgeClass}`}
        >
            <p>{text}</p>
        </div>
    );
};

export default ScoreBadge;
