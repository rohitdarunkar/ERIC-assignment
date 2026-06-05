import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import MapView from "./components/MapView";
import CameraView from "./components/CameraView";
import Controls from "./components/Controls";
import MiniPreview from "./components/MiniPreview";
import ObstacleLayer from "./components/ObstacleLayer";
import PathPlanner from "./components/PathPlanner";
import MissionPanel from "./components/MissionPanel";
import RosConsole from "./components/RosConsole";
import AIDetection from "./components/AIDetection";
import RadarScanner from "./components/RadarScanner";

import "./App.css";

import preview1 from "/map.jpg";
import preview2 from "/robot2.jpg";

function App() {

  const [activeFeed, setActiveFeed] = useState(preview1);

  const [robotPosition, setRobotPosition] = useState({
    x: 35,
    y: 47,
  });

  const [battery, setBattery] = useState(98);

  const [speed, setSpeed] = useState(12);

  const [trail, setTrail] = useState([]);

  useEffect(() => {

    const interval = setInterval(() => {

      setRobotPosition((prev) => {

        const next = {
          x: prev.x + (Math.random() * 6 - 3),
          y: prev.y + (Math.random() * 6 - 3),
        };

        const clamped = {
          x: Math.max(5, Math.min(95, next.x)),
          y: Math.max(5, Math.min(95, next.y)),
        };

        setTrail((old) => [...old.slice(-20), clamped]);

        return clamped;

      });

      setBattery((prev) => Math.max(prev - 0.03, 10));

    }, 1500);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="h-screen w-screen bg-[#020617] overflow-hidden text-white flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-3 md:p-4 flex flex-col gap-4 overflow-hidden">

        {/* Topbar */}
        <Topbar
          battery={battery}
          robotPosition={robotPosition}
          speed={speed}
        />

        {/* Dashboard */}
        <div
          className="
            flex-1
            relative
            rounded-3xl
            overflow-hidden
            border
            border-[#1e293b]
            bg-black
          "
        >

          {/* Main Feed */}
          <CameraView activeFeed={activeFeed} />

          {/* Show map systems ONLY in map mode */}
          {activeFeed === preview1 && (
            <>

              <MapView
                robotPosition={robotPosition}
                trail={trail}
              />

              <RadarScanner />

              <PathPlanner />

              <ObstacleLayer />

              <AIDetection />

            </>
          )}

          {/* Mission Panel */}
          <div className="hidden lg:block">
            <MissionPanel />
          </div>

          {/* ROS Console */}
          <div className="hidden xl:block">
            <RosConsole />
          </div>

          {/* Controls */}
          <Controls />

          {/* Mini Preview */}
          <MiniPreview
            activeFeed={activeFeed}
            setActiveFeed={setActiveFeed}
          />

        </div>

      </div>

    </div>

  );

}

export default App;