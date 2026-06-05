function ObstacleLayer() {

    const obstacles = [
        { x: 25, y: 30 },
        { x: 48, y: 40 },
        { x: 65, y: 55 },
        { x: 78, y: 25 },
        { x: 35, y: 70 },
    ];

    return (

        <div className="absolute inset-0 z-10">

            {obstacles.map((obstacle, index) => (

                <div
                    key={index}
                    className="absolute"
                    style={{
                        left: `${obstacle.x}%`,
                        top: `${obstacle.y}%`,
                    }}
                >

                    {/* Pulse */}
                    <div
                        className="
                            absolute
                            w-10
                            h-10
                            rounded-full
                            bg-red-500/20
                            animate-ping
                            -translate-x-1/2
                            -translate-y-1/2
                        "
                    />

                    {/* Core */}
                    <div
                        className="
                            w-3
                            h-3
                            rounded-full
                            bg-red-500
                            border
                            border-white
                            shadow-[0_0_20px_rgba(255,0,0,0.8)]
                            -translate-x-1/2
                            -translate-y-1/2
                        "
                    />

                </div>

            ))}

        </div>

    );
}

export default ObstacleLayer;