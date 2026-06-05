function MissionPanel() {

    const missions = [
        {
            title: "Warehouse Scan",
            status: "ACTIVE",
        },
        {
            title: "Obstacle Avoidance",
            status: "RUNNING",
        },
        {
            title: "Path Optimization",
            status: "PROCESSING",
        },
        {
            title: "Battery Diagnostics",
            status: "STABLE",
        },
    ];

    return (

        <div
            className="
                absolute
                top-6
                right-6
                z-30
                w-72
                bg-black/40
                backdrop-blur-md
                border
                border-cyan-500/20
                rounded-2xl
                p-4
                shadow-2xl
            "
        >

            {/* Header */}
            <div className="flex items-center justify-between mb-4">

                <h2
                    className="
                        text-cyan-300
                        font-semibold
                        tracking-widest
                        text-sm
                    "
                >
                    MISSION CONTROL
                </h2>

                <div
                    className="
                        w-3
                        h-3
                        rounded-full
                        bg-green-400
                        animate-pulse
                    "
                />

            </div>

            {/* Mission List */}
            <div className="space-y-3">

                {missions.map((mission, index) => (

                    <div
                        key={index}
                        className="
                            bg-white/5
                            border
                            border-white/10
                            rounded-xl
                            p-3
                        "
                    >

                        <div className="flex justify-between items-center">

                            <span className="text-sm text-white">
                                {mission.title}
                            </span>

                            <span
                                className="
                                    text-[10px]
                                    px-2
                                    py-1
                                    rounded-full
                                    bg-cyan-500/20
                                    text-cyan-300
                                    tracking-widest
                                "
                            >
                                {mission.status}
                            </span>

                        </div>

                    </div>

                ))}

            </div>

            {/* Footer */}
            <div
                className="
                    mt-4
                    text-xs
                    text-cyan-400/70
                    tracking-wider
                "
            >
                AI Navigation Core Online
            </div>

        </div>

    );
}

export default MissionPanel;