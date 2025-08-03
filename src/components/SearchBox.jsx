import { useGSAP } from '@gsap/react';
import React, { forwardRef, useState } from 'react'
import gsap from 'gsap';

const SearchBox = forwardRef((props,ref1) => {
    const [city,setcity] = useState('');

    const getdata = async () => {
        const x = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=7b05272681c7441abbc111830250208&q=${city}`);
        const d = await x.json();
        props.setdata(d);
        // props.tl.play();
        props.setshow(false);
    }

  return (
    <div ref={ref1} className='absolute bottom-10 right-0 flex flex-col justify-center items-center p-5 translate-x-[-50%] bg-white/50 gap-5 rounded-lg font-zentry box'>
        <h1>Enter The City</h1>
      <input type='text' onChange={(e) => setcity(e.target.value)}
      className='px-3 py-2 rounded-lg bg-blue-200'
      ></input>
      <button onClick={getdata}
      className='px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-green-400 w-full'
      >Search</button>
    </div>
  )
})

export default SearchBox;
