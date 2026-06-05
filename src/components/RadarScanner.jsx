function RadarScanner() {

    return (

        <div
            className="
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[280px]
                h-[280px]
                md:w-[420px]
                md:h-[420px]
                xl:w-[520px]
                xl:h-[520px]
                rounded-full
                z-[5]
                pointer-events-none
            "
        >

            {/* Outer Rings */}
            <div className="absolute inset-0 rounded-full border border-cyan-400/10" />

            <div className="absolute inset-[15%] rounded-full border border-cyan-400/10" />

            <div className="absolute inset-[30%] rounded-full border border-cyan-400/10" />

            {/* Rotating Beam */}
            <div
                className="
                    absolute
                    top-1/2
                    left-1/2
                    w-1/2
                    h-[2px]
                    origin-left
                    animate-[spin_4s_linear_infinite]
                "
                style={{
                    background:
                        "linear-gradient(to right, rgba(34,211,238,0.8), transparent)",
                }}
            />

            {/* Center Dot */}
            <div
                className="
                    absolute
                    top-1/2
                    left-1/2
                    w-4
                    h-4
                    rounded-full
                    bg-cyan-400
                    -translate-x-1/2
                    -translate-y-1/2
                    shadow-[0_0_20px_rgba(34,211,238,0.9)]
                "
            />

        </div>

    );
}

export default RadarScanner;