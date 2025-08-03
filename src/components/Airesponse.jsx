import React, { useEffect, useState } from "react";

const Airesponse = ({data}) => {
    if (data == null || data.location == null || data.current == null) {
    return <div></div>;
  }
  const apikey = "AIzaSyARLU-iBR35O4C1G62mfULxPA1wBkQZ7ws";
  const [s,sets] = useState('')
  useEffect(() => {
    async function aipower() {
      const x = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apikey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `give me 5 points of explain this in 50words, clothes to wear,  travel log ,new seven days data in 50 words alerts if any just give one single paragraph without any bold info and dont give pointers or bullet marks${JSON.stringify(data)}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const y = await x.json();
      sets(y.candidates[0].content.parts[0].text);
    //   console.log(s);
    }
    aipower();
  } ,[data]);
  return <div className="md:size-1/2 bg-white/50 h-1/2 p-5 rounded-lg backdrop-blur-sm">
    <h1 className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text inline-block">Sktcast says: </h1>
    <br></br>{s}
    </div>;
};

export default Airesponse;