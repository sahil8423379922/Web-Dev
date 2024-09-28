import React, { useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Table from "./Table";

export default function Index() {
  const [msg, setmsg] = useState("What is your name?");

  const data = [
    {
      url: "https://static.displate.com/280x392/displate/2021-01-28/61f2a61d84a7c385afb8a4dd139810d3_9180d9b5b158d5b3dd86c841b1f7a500.jpg",
      name: "Guardians of Galaxy",
      desc: "Computer is a electronic machine",
    },

    {
      url: "https://townsquare.media/site/442/files/2017/10/thor_ragnarok_ver2_xlg1.jpg",
      name: "Thor Ragnorok",
      desc: "Computer is a electronic machine",
    },

    {
      url: "https://i.pinimg.com/736x/48/54/99/4854994674c2da4bc8ca3878c62a1546.jpg",
      name: "Spider Man",
      desc: "Computer is a electronic machine",
    },

    {
      url: "https://i.pinimg.com/736x/48/54/99/4854994674c2da4bc8ca3878c62a1546.jpg",
      name: "Spider Man",
      desc: "Computer is a electronic machine",
    },

    {
      url: "https://i.pinimg.com/736x/48/54/99/4854994674c2da4bc8ca3878c62a1546.jpg",
      name: "Spider Man",
      desc: "Computer is a electronic machine",
    },

    {
      url: "https://i.pinimg.com/736x/48/54/99/4854994674c2da4bc8ca3878c62a1546.jpg",
      name: "Spider Man",
      desc: "Computer is a electronic machine",
    },
  ];
  return (
    <>
      <h2>{msg}</h2>
      <button
        onClick={() => {
          setmsg("My name is sahil Jaiswal");
        }}
      >
        Check
      </button>
      <Card d={data} />
      <Table />
    </>
  );
}
