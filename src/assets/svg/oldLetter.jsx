import * as React from "react"
const OldLetter = (props) => (
  <svg
    width={0}
    height={0}
    style={{
      position: "absolute",
    }}
    {...props}
  >
    <defs>
      <pattern
        id="oldLetterTexture"
        width={120}
        height={120}
        patternUnits="userSpaceOnUse"
      >
        <path fill="#f7f3e9" d="M0 0h120v120H0z" />
        <circle cx={20} cy={25} r={1.2} fill="#e8dcc0" opacity={0.6} />
        <circle cx={95} cy={40} r={0.8} fill="#d4c4a0" opacity={0.5} />
        <circle cx={55} cy={70} r={1} fill="#e0d1b3" opacity={0.4} />
        <circle cx={85} cy={95} r={1.5} fill="#dcc7a6" opacity={0.3} />
        <circle cx={30} cy={90} r={0.6} fill="#c9b894" opacity={0.7} />
        <circle cx={70} cy={30} r={0.9} fill="#e3d4b7" opacity={0.5} />
        <circle cx={10} cy={60} r={0.7} fill="#d9c9aa" opacity={0.6} />
        <circle cx={100} cy={15} r={0.5} fill="#e6d7ba" opacity={0.4} />
        <path
          fill="none"
          stroke="#ebe2d0"
          strokeWidth={0.3}
          d="M0 20q30 5 60 0t60 0"
          opacity={0.4}
        />
        <path
          fill="none"
          stroke="#e8dcc0"
          strokeWidth={0.2}
          d="M0 50q40-5 80 0t40 0"
          opacity={0.3}
        />
        <path
          fill="none"
          stroke="#d4c4a0"
          strokeWidth={0.25}
          d="M0 80q35 5 70 0t50 0"
          opacity={0.5}
        />
        <path
          fill="none"
          stroke="#dcc7a6"
          strokeWidth={0.2}
          d="M0 100q50-5 100 0t20 0"
          opacity={0.3}
        />
        <path
          stroke="#e0d1b3"
          strokeWidth={0.1}
          d="m0 40 120 2"
          opacity={0.6}
        />
        <path
          stroke="#d9c9aa"
          strokeWidth={0.1}
          d="m0 75 120-2"
          opacity={0.5}
        />
        <circle cx={45} cy={15} r={0.2} fill="#ebe2d0" opacity={0.8} />
        <circle cx={15} cy={45} r={0.3} fill="#e8dcc0" opacity={0.6} />
        <circle cx={105} cy={65} r={0.2} fill="#d4c4a0" opacity={0.7} />
        <circle cx={65} cy={105} r={0.3} fill="#dcc7a6" opacity={0.5} />
        <circle cx={35} cy={55} r={0.2} fill="#e3d4b7" opacity={0.6} />
        <path
          fill="none"
          stroke="#e8dcc0"
          strokeWidth={0.3}
          d="M0 0q10 5 20 0t20 0 20 0 20 0 20 0 20 0"
          opacity={0.3}
        />
        <path
          fill="none"
          stroke="#d4c4a0"
          strokeWidth={0.3}
          d="M0 120q10-5 20 0t20 0 20 0 20 0 20 0 20 0"
          opacity={0.4}
        />
        <ellipse
          cx={60}
          cy={60}
          fill="none"
          stroke="#ebe2d0"
          strokeWidth={0.1}
          opacity={0.2}
          rx={25}
          ry={15}
        />
        <ellipse
          cx={60}
          cy={60}
          fill="none"
          stroke="#e8dcc0"
          strokeWidth={0.1}
          opacity={0.3}
          rx={15}
          ry={10}
        />
      </pattern>
      <pattern
        id="parchmentTexture"
        width={100}
        height={100}
        patternUnits="userSpaceOnUse"
      >
        <path fill="#f9f6f0" d="M0 0h100v100H0z" />
        <circle cx={25} cy={25} r={0.8} fill="#eee4d5" opacity={0.6} />
        <circle cx={75} cy={75} r={1.2} fill="#e8dcc0" opacity={0.4} />
        <circle cx={50} cy={15} r={0.6} fill="#dcc7a6" opacity={0.5} />
        <circle cx={20} cy={80} r={0.9} fill="#e0d1b3" opacity={0.3} />
        <path
          fill="none"
          stroke="#f0e8d8"
          strokeWidth={0.2}
          d="M0 30q25 5 50 0t50 0"
          opacity={0.5}
        />
        <path
          fill="none"
          stroke="#ebe2d0"
          strokeWidth={0.2}
          d="M0 70q25-5 50 0t50 0"
          opacity={0.4}
        />
      </pattern>
    </defs>
  </svg>
)
export default OldLetter
