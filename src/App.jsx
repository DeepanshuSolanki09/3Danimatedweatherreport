import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import { Canvas } from "@react-three/fiber";
import ThreeD from "./components/ThreeD";
import SearchBox from "./components/SearchBox";
import Dashboard from "./components/Dashboard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Snow from "./components/Snow";
import Rain from "./components/Rain";
import Mist from "./components/Mist";

function App() {
  function created(state) {
    state.gl.setClearColor("#000000", 1);
  }

  const [data, setdata] = useState([]);
  const [show, setshow] = useState(true);

  function renderderscene() {
    const condition = data?.current?.condition?.text;
    const rain = ["Patchy rain nearby", "Light rain", "Partly cloudy"];
    const sunny = ["Sunny"];
    const mist = ["Overcast", "Mist", "Clear"];
    const snow = ["snow"];
    if (condition == null) {
      return <ThreeD />;
    }
    if (rain.includes(condition)) {
      return <Rain />;
    }
    if (sunny.includes(condition)) {
      return <ThreeD />;
    }
    if (mist.includes(condition)) {
      return <Mist />;
    }
    if (snow.includes(condition)) {
      return <Snow />;
    }
  }

  return (
    <>
      <Canvas className="relative left-0 top-0" onCreated={created}>
        <ThreeD />
        {renderderscene()}
      </Canvas>
      <div className="h-dvh inset-0 bg-gradient-to-r from-blue-200/10 to-green-200/10 absolute">
      <Dashboard data={data}/>
      </div>
      <Navbar show={show} setshow={setshow}/>
      {show ? <SearchBox data={data} setdata={setdata} setshow={setshow}/> : <div></div>}
    </>
  );
}

export default App;
