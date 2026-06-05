function Controls({ moveRobot }) {

  return (

    <>

      {/* Zoom Slider */}
      <div className="absolute left-6 bottom-44 flex flex-col items-center gap-3">

        <div className="w-2 h-28 rounded-full bg-[#1f2937] relative">

          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-lg" />

        </div>

      </div>

      {/* Emergency */}
      <div className="absolute right-10 bottom-32">

        <button className="w-24 h-24 rounded-full bg-red-500 hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(255,0,0,0.5)] text-white font-bold text-lg">
          STOP
        </button>

      </div>

      {/* Controller */}
      <div className="absolute right-10 bottom-8 w-28 h-28 rounded-full bg-[#1f2937]/80 backdrop-blur-md border border-[#374151] flex items-center justify-center text-white shadow-2xl">

        <div className="grid grid-cols-3 gap-1 text-xs">

          <div />

          <button
            onClick={() => moveRobot("up")}
            className="hover:text-cyan-400 transition"
          >
            ▲
          </button>

          <div />

          <button
            onClick={() => moveRobot("left")}
            className="hover:text-cyan-400 transition"
          >
            ◀
          </button>

          <div className="w-6 h-6 rounded-full bg-gray-600" />

          <button
            onClick={() => moveRobot("right")}
            className="hover:text-cyan-400 transition"
          >
            ▶
          </button>

          <div />

          <button
            onClick={() => moveRobot("down")}
            className="hover:text-cyan-400 transition"
          >
            ▼
          </button>

          <div />

        </div>

      </div>

    </>

  );
}

export default Controls;