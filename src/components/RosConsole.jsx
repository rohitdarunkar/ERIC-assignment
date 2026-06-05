function RosConsole() {

    const logs = [
        "[INFO] SLAM map updated successfully",
        "[INFO] LiDAR scan synchronized",
        "[WARNING] Obstacle detected at sector B4",
        "[INFO] Navigation path recalculated",
        "[INFO] Camera feed stable",
        "[INFO] AI planner online",
        "[INFO] Motor controller responding",
        "[INFO] Autonomous mode active",
    ];

    return (

        <div
            className="
                absolute
                bottom-6
                right-6
                z-30
                w-[420px]
                h-52
                bg-black/50
                backdrop-blur-md
                border
                border-cyan-500/20
                rounded-2xl
                overflow-hidden
                shadow-2xl
            "
        >

            {/* Header */}
            <div
                className="
                    flex
                    items-center
                    justify-between
                    px-4
                    py-3
                    border-b
                    border-white/10
                "
            >

                <div
                    className="
                        text-cyan-300
                        text-sm
                        tracking-widest
                        font-semibold
                    "
                >
                    ROS2 TERMINAL
                </div>

                <div className="flex gap-2">

                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />

                </div>

            </div>

            {/* Logs */}
            <div
                className="
                    p-4
                    text-xs
                    font-mono
                    text-green-400
                    space-y-2
                    overflow-y-auto
                    h-full
                "
            >

                {logs.map((log, index) => (

                    <div
                        key={index}
                        className="animate-pulse"
                    >
                        {log}
                    </div>

                ))}

            </div>

        </div>

    );
}

export default RosConsole;