function MapView({
  robotPosition,
  trail,
}) {

  return (

    <div className="relative w-full h-full">

      {/* MAP */}
      <img
        src="/map.jpg"
        alt="map"
        className="w-full h-full object-cover opacity-40"
      />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* TRAIL */}
      {
        trail.map((point, index) => (

          <div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-cyan-400/40"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
            }}
          />

        ))
      }

      {/* ROBOT */}
      <div
        className="absolute transition-all duration-300"
        style={{
          left: `${robotPosition.x}%`,
          top: `${robotPosition.y}%`,
        }}
      >

        {/* Pulse */}
        <div className="absolute w-16 h-16 rounded-full bg-cyan-400/20 animate-ping -translate-x-1/2 -translate-y-1/2" />

        {/* Robot Dot */}
        <div className="w-5 h-5 rounded-full bg-cyan-400 border-4 border-white shadow-[0_0_25px_rgba(34,211,238,0.9)] -translate-x-1/2 -translate-y-1/2" />

      </div>

    </div>

  );
}

export default MapView;