function AIDetection() {

    const detections = [

        {
            label: "PERSON",
            confidence: "98%",
            top: "22%",
            left: "28%",
            width: "12%",
            height: "24%",
        },

        {
            label: "ROBOT",
            confidence: "96%",
            top: "56%",
            left: "60%",
            width: "16%",
            height: "18%",
        },

    ];

    return (

        <div className="absolute inset-0 z-20 pointer-events-none">

            {detections.map((item, index) => (

                <div
                    key={index}
                    className="
                        absolute
                        border-2
                        border-cyan-400
                        shadow-[0_0_12px_rgba(34,211,238,0.5)]
                        animate-pulse
                    "
                    style={{
                        top: item.top,
                        left: item.left,
                        width: item.width,
                        height: item.height,
                    }}
                >

                    {/* Label */}
                    <div
                        className="
                            absolute
                            -top-6
                            left-0
                            bg-cyan-400
                            text-black
                            text-[10px]
                            md:text-xs
                            font-bold
                            px-2
                            py-[2px]
                            rounded
                            tracking-wider
                        "
                    >
                        {item.label} • {item.confidence}
                    </div>

                    {/* Corners */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-300" />

                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-300" />

                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-300" />

                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-300" />

                </div>

            ))}

        </div>

    );
}

export default AIDetection;