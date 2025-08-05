import { useGSAP } from "@gsap/react";
import React, { forwardRef, useEffect, useState } from "react";
import gsap from "gsap";

const SearchBox = forwardRef((props, ref1) => {
  const [city, setcity] = useState("");

  useEffect(() => {
    async function set_city() {
      const y = await fetch("https://get.geojs.io/v1/ip/geo.json");
      const l = await y.json();
      const x = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=7b05272681c7441abbc111830250208&q=${l.city}`
      );
      const d = await x.json();
      props.setdata(d);
    }
    set_city();
  },[]);

  const getdata = async () => {
    const x = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=7b05272681c7441abbc111830250208&q=${city}`
    );
    const d = await x.json();
    props.setdata(d);
    // props.tl.play();
    props.setshow(false);
  };

  return (
    <div
      ref={ref1}
      className="absolute bottom-10 left-1/2 md:right-0 flex flex-col justify-center items-center p-5 translate-x-[-50%] bg-white/50 gap-5 rounded-lg font-zentry box sm:mx-auto"
    >
      <h1>Enter The City</h1>
      <input
        type="text"
        onChange={(e) => setcity(e.target.value)}
        className="px-3 py-2 rounded-lg bg-blue-200 w-full"
      ></input>
      <button
        onClick={getdata}
        className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-green-400 w-full"
      >
        Search
      </button>
    </div>
  );
});

export default SearchBox;
