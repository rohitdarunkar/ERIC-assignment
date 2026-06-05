import {
  Home,
  Map,
  Camera,
  Settings,
} from "lucide-react";

function Sidebar() {

  return (

    <div className="w-[70px] bg-[#08101c] border-r border-[#1f2937] flex flex-col items-center py-6">

      <h1 className="text-white font-bold text-2xl mb-10">
        ERIC
      </h1>

      <div className="flex flex-col gap-8 text-gray-400">

        <button className="hover:text-cyan-400 transition">
          <Home size={20} />
        </button>

        <button className="hover:text-cyan-400 transition">
          <Map size={20} />
        </button>

        <button className="hover:text-cyan-400 transition">
          <Camera size={20} />
        </button>

        <button className="hover:text-cyan-400 transition">
          <Settings size={20} />
        </button>

      </div>

    </div>

  );
}

export default Sidebar;