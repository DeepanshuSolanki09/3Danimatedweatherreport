import React from "react";
import Airesponse from "./Airesponse";


const Dashboard = ({ data }) => {
  const { location, current } = data;

  if (data == null || data.location == null || data.current == null) {
    return <div className="h-dvh flex justify-center items-end font-zentry py-28">loading the report.....</div>;
  }

  return (
    <div className="absolute left-0 top-0 h-vh flex flex-col md:flex-row justify-center items-center font-zentry p-10 gap-10">
      <div className="flex - flex-col w-full md:w-2/3 h-1/2 items-center justify-center gap-3 mt-12">
        <h1 className="font-medium text-4xl">
          {location.name},{location.region},{location.country}
        </h1>
        <p className="opacity-50 text-lg">{location.localtime}</p>
        <div className="w-full h-full bg-gradient-to-r from-blue-300/50 to-green-300/50 rounded-lg shadow-lg flex gap-5 jusctify-center items-center px-7 py-5">
          <div className="w-1/2 flex flex-col items-center">
            <div className="w-1/3 h-1/3">
              <img
                src={`https:${current.condition.icon}`}
                className="size-full object-fit"
              />
            </div>
            <h1>{current.condition.text}</h1>
            <h1 className="text-6xl">{current.temp_c}°C</h1>
            <p className="opacity-50">Feels like: {current.feelslike_c}°C</p>
          </div>
          <div className="w-1/2 flex justify-around items-center gap-7">
            <div className="flex flex-col gap-2 justify-center">
              <div className="h-auto">
                <h1>Humidity</h1>
                <h1 className="opacity-50">{current.humidity}%</h1>
              </div>
              <div className="h-auto">
                <h1>Pressure</h1>
                <h1 className="opacity-50">{current.pressure_mb} mb</h1>
              </div>
              <div className="h-auto">
                <h1>wind</h1>
                <h1 className="opacity-50">{current.wind_kph} kph</h1>
              </div>
              <div className="h-auto">
                <h1>cloud cover</h1>
                <h1 className="opacity-50">{current.cloud}%</h1>
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <div className="h-auto">
                <h1>uv index</h1>
                <h1 className="opacity-50">{current.uv}</h1>
              </div>
              <div className="h-auto">
                <h1>visibility</h1>
                <h1 className="opacity-50">{current.vis_km} km</h1>
              </div>
              <div className=" h-auto">
                <h1>heat index</h1>
                <h1 className="opacity-50">{current.heatindex_c}°C</h1>
              </div>
              <div className="h-auto">
                <h1>dew point</h1>
                <h1 className="opacity-50">{current.dewpoint_c}°C</h1>
              </div>
            </div>
          </div>
        </div>
                <p className="opacity-50 text-lg">Last Updated:{current.last_updated}</p>
      </div>
      <Airesponse data={data}/>
    </div>
  );
};

export default Dashboard;
