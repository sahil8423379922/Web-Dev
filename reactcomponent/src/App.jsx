import React from "react";
import Computer from "./component/Computer";
import Software from "./component/Software";
import Navbar from "./component/Navbar";
import Table from "./component/Table";
import CmpCard from "./component/Card";

export default function App() {
  var obj = {
    title: "What is Computer?",
    para: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique non quibusdam dolorem delectus qui quidem ratione tenetur vel, blanditiis placeat doloribus error rerum praesentium magnam, possimus, dignissimos ipsa neque soluta!",
  };

  var name_of_software = [
    {
      name: "M.S Office",
      desc: "Use to Create Document",
    },

    {
      name: "M.S Paint",
      desc: "Use for Drawing",
    },

    {
      name: "Corel Draw",
      desc: "Use for Graphic Designing",
    },

    {
      name: "V.S Code",
      desc: "Use for Programming",
    },
  ];

  return (
    <div>
      <Navbar />

      <CmpCard />

      <Table nos={name_of_software} />
      {/* <Computer o={obj} />
      <Software nos={name_of_software} /> */}
    </div>
  );
}
