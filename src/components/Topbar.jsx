import {
  Battery,
  Radio,
  Bot,
  Gauge,
} from "lucide-react";

function Topbar(props) {

  const {
    battery = 0,
    robotPosition = { x: 0, y: 0 },
    speed = 0,
  } = props;

  return (

    <div className="h-[70px] rounded-2xl bg-[#111827]/80 backdrop-blur-md border border-[#1f2937] flex items-center justify-between px-6">

      <div className="flex items-center gap-8 text-sm text-gray-300">

        {/* Battery */}
        <div className="flex items-center gap-2">
          <Battery size={18} className="text-green-400" />
          <span>{battery.toFixed(0)}%</span>
        </div>

        {/* Signal */}
        <div className="flex items-center gap-2">
          <Radio size={18} className="text-green-400" />
          <span>Strong Signal</span>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span>System OK</span>
        </div>

        {/* Coordinates */}
        <div className="flex items-center gap-2">
          <Bot size={18} className="text-cyan-400" />
          <span>
            X:{robotPosition.x.toFixed(0)} Y:{robotPosition.y.toFixed(0)}
          </span>
        </div>

        {/* Speed */}
        <div className="flex items-center gap-2">
          <Gauge size={18} className="text-yellow-400" />
          <span>{speed} km/h</span>
        </div>

      </div>

      {/* Right Buttons */}
      <div className="flex gap-3">

        <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold">
          AUTO
        </button>

        <button className="px-5 py-2 rounded-full border border-[#374151] text-sm text-white hover:bg-white/10 transition">
          MANUAL
        </button>

      </div>

    </div>

  );
}

export default Topbar;