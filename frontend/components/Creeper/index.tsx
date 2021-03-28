import React from "react";
import anim from "../../styles/Anim.module.css";

export default function index() {
  return (
    <svg
      className={`${anim.root}`}
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="CreeperLayer">
        <g id="Creeper" className={`${anim.fadeU}`}>
          <g id="Eyes">
            <rect
              id="Rectangle 1"
              x="56"
              y="66"
              width="64"
              height="64"
              fill="white"
            />
            <rect
              id="Rectangle 4"
              x="184"
              y="66"
              width="64"
              height="64"
              fill="white"
            />
          </g>
          <g id="Mouth">
            <rect
              id="Rectangle 4_2"
              x="120"
              y="130"
              width="64"
              height="64"
              fill="white"
            />
            <rect
              id="Rectangle 7"
              x="120"
              y="194"
              width="64"
              height="32"
              fill="white"
            />
            <rect
              id="Rectangle 5"
              x="184"
              y="163"
              width="32"
              height="95"
              fill="white"
            />
            <rect
              id="Rectangle 6"
              x="88"
              y="163"
              width="32"
              height="95"
              fill="white"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
