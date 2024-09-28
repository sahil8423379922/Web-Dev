import React from "react";
import { useLocation } from "react-router-dom";

export default function About({ data }) {
  const location = useLocation();
  const { datatosend } = location.state;
  return (
    <div>
      <h1>{datatosend}</h1>
    </div>
  );
}
