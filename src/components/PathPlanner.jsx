function PathPlanner() {

    const pathPoints = [
        { x: 18, y: 72 },
        { x: 28, y: 60 },
        { x: 36, y: 54 },
        { x: 44, y: 48 },
        { x: 55, y: 42 },
        { x: 67, y: 38 },
        { x: 78, y: 30 },
    ];

    return (

        <svg
            className="absolute inset-0 w-full h-full z-[8]"
            preserveAspectRatio="none"
        >

            {/* Path Lines */}
            {pathPoints.map((point, index) => {

                if (index === pathPoints.length - 1) return null;

                const next = pathPoints[index + 1];

                return (

                    <line
                        key={index}
                        x1={`${point.x}%`}
                        y1={`${point.y}%`}
                        x2={`${next.x}%`}
                        y2={`${next.y}%`}
                        stroke="#22d3ee"
                        strokeWidth="3"
                        strokeDasharray="8 8"
                        opacity="0.8"
                    />

                );
            })}

            {/* Waypoints */}
            {pathPoints.map((point, index) => (

                <circle
                    key={index}
                    cx={`${point.x}%`}
                    cy={`${point.y}%`}
                    r="7"
                    fill="#06b6d4"
                    opacity="0.9"
                />

            ))}

        </svg>

    );
}

export default PathPlanner;