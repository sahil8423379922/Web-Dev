import React from "react";
import Computer from "./component/Computer";
import Software from "./component/Software";
import Navbar from "./component/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Computer />
      <Software />
    </div>
  );
}
