import type { SVGAttributes } from "react";

type BackgroundProps = SVGAttributes<SVGElement>;

export const Backgrounds = {
  BlueTriangles: (props: BackgroundProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="540"
        height="450"
        viewBox="0 0 1080 900"
        {...props}
      >
        <rect fill="#00b7ff" width="1080" height="900" />
        <g fill-opacity=".1">
          <polygon fill="#444" points="90 150 0 300 180 300" />
          <polygon points="90 150 180 0 0 0" />
          <polygon fill="#AAA" points="270 150 360 0 180 0" />
          <polygon fill="#DDD" points="450 150 360 300 540 300" />
          <polygon fill="#999" points="450 150 540 0 360 0" />
          <polygon points="630 150 540 300 720 300" />
          <polygon fill="#DDD" points="630 150 720 0 540 0" />
          <polygon fill="#444" points="810 150 720 300 900 300" />
          <polygon fill="#FFF" points="810 150 900 0 720 0" />
          <polygon fill="#DDD" points="990 150 900 300 1080 300" />
          <polygon fill="#444" points="990 150 1080 0 900 0" />
          <polygon fill="#DDD" points="90 450 0 600 180 600" />
          <polygon points="90 450 180 300 0 300" />
          <polygon fill="#666" points="270 450 180 600 360 600" />
          <polygon fill="#AAA" points="270 450 360 300 180 300" />
          <polygon fill="#DDD" points="450 450 360 600 540 600" />
          <polygon fill="#999" points="450 450 540 300 360 300" />
          <polygon fill="#999" points="630 450 540 600 720 600" />
          <polygon fill="#FFF" points="630 450 720 300 540 300" />
          <polygon points="810 450 720 600 900 600" />
          <polygon fill="#DDD" points="810 450 900 300 720 300" />
          <polygon fill="#AAA" points="990 450 900 600 1080 600" />
          <polygon fill="#444" points="990 450 1080 300 900 300" />
          <polygon fill="#222" points="90 750 0 900 180 900" />
          <polygon points="270 750 180 900 360 900" />
          <polygon fill="#DDD" points="270 750 360 600 180 600" />
          <polygon points="450 750 540 600 360 600" />
          <polygon points="630 750 540 900 720 900" />
          <polygon fill="#444" points="630 750 720 600 540 600" />
          <polygon fill="#AAA" points="810 750 720 900 900 900" />
          <polygon fill="#666" points="810 750 900 600 720 600" />
          <polygon fill="#999" points="990 750 900 900 1080 900" />
          <polygon fill="#999" points="180 0 90 150 270 150" />
          <polygon fill="#444" points="360 0 270 150 450 150" />
          <polygon fill="#FFF" points="540 0 450 150 630 150" />
          <polygon points="900 0 810 150 990 150" />
          <polygon fill="#222" points="0 300 -90 450 90 450" />
          <polygon fill="#FFF" points="0 300 90 150 -90 150" />
          <polygon fill="#FFF" points="180 300 90 450 270 450" />
          <polygon fill="#666" points="180 300 270 150 90 150" />
          <polygon fill="#222" points="360 300 270 450 450 450" />
          <polygon fill="#FFF" points="360 300 450 150 270 150" />
          <polygon fill="#444" points="540 300 450 450 630 450" />
          <polygon fill="#222" points="540 300 630 150 450 150" />
          <polygon fill="#AAA" points="720 300 630 450 810 450" />
          <polygon fill="#666" points="720 300 810 150 630 150" />
          <polygon fill="#FFF" points="900 300 810 450 990 450" />
          <polygon fill="#999" points="900 300 990 150 810 150" />
          <polygon points="0 600 -90 750 90 750" />
          <polygon fill="#666" points="0 600 90 450 -90 450" />
          <polygon fill="#AAA" points="180 600 90 750 270 750" />
          <polygon fill="#444" points="180 600 270 450 90 450" />
          <polygon fill="#444" points="360 600 270 750 450 750" />
          <polygon fill="#999" points="360 600 450 450 270 450" />
          <polygon fill="#666" points="540 600 630 450 450 450" />
          <polygon fill="#222" points="720 600 630 750 810 750" />
          <polygon fill="#FFF" points="900 600 810 750 990 750" />
          <polygon fill="#222" points="900 600 990 450 810 450" />
          <polygon fill="#DDD" points="0 900 90 750 -90 750" />
          <polygon fill="#444" points="180 900 270 750 90 750" />
          <polygon fill="#FFF" points="360 900 450 750 270 750" />
          <polygon fill="#AAA" points="540 900 630 750 450 750" />
          <polygon fill="#FFF" points="720 900 810 750 630 750" />
          <polygon fill="#222" points="900 900 990 750 810 750" />
          <polygon fill="#222" points="1080 300 990 450 1170 450" />
          <polygon fill="#FFF" points="1080 300 1170 150 990 150" />
          <polygon points="1080 600 990 750 1170 750" />
          <polygon fill="#666" points="1080 600 1170 450 990 450" />
          <polygon fill="#DDD" points="1080 900 1170 750 990 750" />
        </g>
      </svg>
    );
  },
  Constellation: (props: BackgroundProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="400"
        viewBox="0 0 800 800"
        {...props}
      >
        <rect fill="#330033" width="800" height="800" />
        <g fill="none" stroke="#404" stroke-width="1">
          <path d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63" />
          <path d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764" />
          <path d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880" />
          <path d="M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382" />
          <path d="M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269" />
        </g>
        <g fill="#505">
          <circle cx="769" cy="229" r="5" />
          <circle cx="539" cy="269" r="5" />
          <circle cx="603" cy="493" r="5" />
          <circle cx="731" cy="737" r="5" />
          <circle cx="520" cy="660" r="5" />
          <circle cx="309" cy="538" r="5" />
          <circle cx="295" cy="764" r="5" />
          <circle cx="40" cy="599" r="5" />
          <circle cx="102" cy="382" r="5" />
          <circle cx="127" cy="80" r="5" />
          <circle cx="370" cy="105" r="5" />
          <circle cx="578" cy="42" r="5" />
          <circle cx="237" cy="261" r="5" />
          <circle cx="390" cy="382" r="5" />
        </g>
      </svg>
    );
  },
  Dalmation: (props: BackgroundProps) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 1000" {...props}>
        <rect fill="#330055" width="100" height="1000" />
        <g fill-opacity="1">
          <circle fill="#330055" cx="50" cy="0" r="50" />
          <g fill="#3a015d">
            <circle cx="0" cy="50" r="50" />
            <circle cx="100" cy="50" r="50" />
          </g>
          <circle fill="#410165" cx="50" cy="100" r="50" />
          <g fill="#48026e">
            <circle cx="0" cy="150" r="50" />
            <circle cx="100" cy="150" r="50" />
          </g>
          <circle fill="#500376" cx="50" cy="200" r="50" />
          <g fill="#57047e">
            <circle cx="0" cy="250" r="50" />
            <circle cx="100" cy="250" r="50" />
          </g>
          <circle fill="#5f0587" cx="50" cy="300" r="50" />
          <g fill="#67068f">
            <circle cx="0" cy="350" r="50" />
            <circle cx="100" cy="350" r="50" />
          </g>
          <circle fill="#6f0798" cx="50" cy="400" r="50" />
          <g fill="#7707a0">
            <circle cx="0" cy="450" r="50" />
            <circle cx="100" cy="450" r="50" />
          </g>
          <circle fill="#8008a9" cx="50" cy="500" r="50" />
          <g fill="#8909b1">
            <circle cx="0" cy="550" r="50" />
            <circle cx="100" cy="550" r="50" />
          </g>
          <circle fill="#9109ba" cx="50" cy="600" r="50" />
          <g fill="#9a09c3">
            <circle cx="0" cy="650" r="50" />
            <circle cx="100" cy="650" r="50" />
          </g>
          <circle fill="#a309cb" cx="50" cy="700" r="50" />
          <g fill="#ad09d4">
            <circle cx="0" cy="750" r="50" />
            <circle cx="100" cy="750" r="50" />
          </g>
          <circle fill="#b608dc" cx="50" cy="800" r="50" />
          <g fill="#c007e5">
            <circle cx="0" cy="850" r="50" />
            <circle cx="100" cy="850" r="50" />
          </g>
          <circle fill="#c905ee" cx="50" cy="900" r="50" />
          <g fill="#d303f6">
            <circle cx="0" cy="950" r="50" />
            <circle cx="100" cy="950" r="50" />
          </g>
          <circle fill="#D0F" cx="50" cy="1000" r="50" />
        </g>
      </svg>
    );
  },
  Diamonds: (props: BackgroundProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        {...props}
      >
        <defs>
          <linearGradient id="a" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stop-color="#80F" />
            <stop offset="1" stop-color="#f40" />
          </linearGradient>
        </defs>
        <pattern id="b" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle fill="#ffffff" cx="12" cy="12" r="12" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#a)" />
        <rect width="100%" height="100%" fill="url(#b)" fill-opacity="0.1" />
      </svg>
    );
  },
  Polka: (props: BackgroundProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="90"
        height="90"
        viewBox="0 0 90 90"
        {...props}
      >
        <rect fill="#330033" width="90" height="90" />
        <circle fill-opacity="1" fill="#06B" cx="45" cy="45" r="10" />
        <g fill="#800" fill-opacity="1">
          <circle cx="0" cy="90" r="10" />
          <circle cx="90" cy="90" r="10" />
          <circle cx="90" cy="0" r="10" />
          <circle cx="0" cy="0" r="10" />
        </g>
      </svg>
    );
  },
  Prism: (props: BackgroundProps) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" {...props}>
        <defs>
          <linearGradient
            id="a"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="0"
            y1="0"
            y2="100%"
            gradientTransform="rotate(240)"
          >
            <stop offset="0" stop-color="#ffffff" />
            <stop offset="1" stop-color="#4FE" />
          </linearGradient>
          <pattern
            patternUnits="userSpaceOnUse"
            id="b"
            width="540"
            height="450"
            x="0"
            y="0"
            viewBox="0 0 1080 900"
          >
            <g fill-opacity="0.1">
              <polygon fill="#444" points="90 150 0 300 180 300" />
              <polygon points="90 150 180 0 0 0" />
              <polygon fill="#AAA" points="270 150 360 0 180 0" />
              <polygon fill="#DDD" points="450 150 360 300 540 300" />
              <polygon fill="#999" points="450 150 540 0 360 0" />
              <polygon points="630 150 540 300 720 300" />
              <polygon fill="#DDD" points="630 150 720 0 540 0" />
              <polygon fill="#444" points="810 150 720 300 900 300" />
              <polygon fill="#FFF" points="810 150 900 0 720 0" />
              <polygon fill="#DDD" points="990 150 900 300 1080 300" />
              <polygon fill="#444" points="990 150 1080 0 900 0" />
              <polygon fill="#DDD" points="90 450 0 600 180 600" />
              <polygon points="90 450 180 300 0 300" />
              <polygon fill="#666" points="270 450 180 600 360 600" />
              <polygon fill="#AAA" points="270 450 360 300 180 300" />
              <polygon fill="#DDD" points="450 450 360 600 540 600" />
              <polygon fill="#999" points="450 450 540 300 360 300" />
              <polygon fill="#999" points="630 450 540 600 720 600" />
              <polygon fill="#FFF" points="630 450 720 300 540 300" />
              <polygon points="810 450 720 600 900 600" />
              <polygon fill="#DDD" points="810 450 900 300 720 300" />
              <polygon fill="#AAA" points="990 450 900 600 1080 600" />
              <polygon fill="#444" points="990 450 1080 300 900 300" />
              <polygon fill="#222" points="90 750 0 900 180 900" />
              <polygon points="270 750 180 900 360 900" />
              <polygon fill="#DDD" points="270 750 360 600 180 600" />
              <polygon points="450 750 540 600 360 600" />
              <polygon points="630 750 540 900 720 900" />
              <polygon fill="#444" points="630 750 720 600 540 600" />
              <polygon fill="#AAA" points="810 750 720 900 900 900" />
              <polygon fill="#666" points="810 750 900 600 720 600" />
              <polygon fill="#999" points="990 750 900 900 1080 900" />
              <polygon fill="#999" points="180 0 90 150 270 150" />
              <polygon fill="#444" points="360 0 270 150 450 150" />
              <polygon fill="#FFF" points="540 0 450 150 630 150" />
              <polygon points="900 0 810 150 990 150" />
              <polygon fill="#222" points="0 300 -90 450 90 450" />
              <polygon fill="#FFF" points="0 300 90 150 -90 150" />
              <polygon fill="#FFF" points="180 300 90 450 270 450" />
              <polygon fill="#666" points="180 300 270 150 90 150" />
              <polygon fill="#222" points="360 300 270 450 450 450" />
              <polygon fill="#FFF" points="360 300 450 150 270 150" />
              <polygon fill="#444" points="540 300 450 450 630 450" />
              <polygon fill="#222" points="540 300 630 150 450 150" />
              <polygon fill="#AAA" points="720 300 630 450 810 450" />
              <polygon fill="#666" points="720 300 810 150 630 150" />
              <polygon fill="#FFF" points="900 300 810 450 990 450" />
              <polygon fill="#999" points="900 300 990 150 810 150" />
              <polygon points="0 600 -90 750 90 750" />
              <polygon fill="#666" points="0 600 90 450 -90 450" />
              <polygon fill="#AAA" points="180 600 90 750 270 750" />
              <polygon fill="#444" points="180 600 270 450 90 450" />
              <polygon fill="#444" points="360 600 270 750 450 750" />
              <polygon fill="#999" points="360 600 450 450 270 450" />
              <polygon fill="#666" points="540 600 630 450 450 450" />
              <polygon fill="#222" points="720 600 630 750 810 750" />
              <polygon fill="#FFF" points="900 600 810 750 990 750" />
              <polygon fill="#222" points="900 600 990 450 810 450" />
              <polygon fill="#DDD" points="0 900 90 750 -90 750" />
              <polygon fill="#444" points="180 900 270 750 90 750" />
              <polygon fill="#FFF" points="360 900 450 750 270 750" />
              <polygon fill="#AAA" points="540 900 630 750 450 750" />
              <polygon fill="#FFF" points="720 900 810 750 630 750" />
              <polygon fill="#222" points="900 900 990 750 810 750" />
              <polygon fill="#222" points="1080 300 990 450 1170 450" />
              <polygon fill="#FFF" points="1080 300 1170 150 990 150" />
              <polygon points="1080 600 990 750 1170 750" />
              <polygon fill="#666" points="1080 600 1170 450 990 450" />
              <polygon fill="#DDD" points="1080 900 1170 750 990 750" />
            </g>
          </pattern>
        </defs>
        <rect x="0" y="0" fill="url(#a)" width="100%" height="100%" />
        <rect x="0" y="0" fill="url(#b)" width="100%" height="100%" />
      </svg>
    );
  },
  Raindow: (props: BackgroundProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        {...props}
      >
        <rect fill="#ffff00" width="1200" height="800" />
        <defs>
          <radialGradient
            id="a"
            cx="0"
            cy="800"
            r="800"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#ff8000" />
            <stop offset="1" stop-color="#ff8000" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="b"
            cx="1200"
            cy="800"
            r="800"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#00ff19" />
            <stop offset="1" stop-color="#00ff19" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="c"
            cx="600"
            cy="0"
            r="600"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#9900ff" />
            <stop offset="1" stop-color="#9900ff" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="d"
            cx="600"
            cy="800"
            r="600"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#ffff00" />
            <stop offset="1" stop-color="#ffff00" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="e"
            cx="0"
            cy="0"
            r="800"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#FF0000" />
            <stop offset="1" stop-color="#FF0000" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="f"
            cx="1200"
            cy="0"
            r="800"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#0CF" />
            <stop offset="1" stop-color="#0CF" stop-opacity="0" />
          </radialGradient>
        </defs>
        <rect fill="url(#a)" width="1200" height="800" />
        <rect fill="url(#b)" width="1200" height="800" />
        <rect fill="url(#c)" width="1200" height="800" />
        <rect fill="url(#d)" width="1200" height="800" />
        <rect fill="url(#e)" width="1200" height="800" />
        <rect fill="url(#f)" width="1200" height="800" />
      </svg>
    );
  },
  RosePetals: (props: BackgroundProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
        {...props}
      >
        <rect fill="#330000" width="800" height="400" />
        <defs>
          <radialGradient
            id="a"
            cx="396"
            cy="281"
            r="514"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#D18" />
            <stop offset="1" stop-color="#330000" />
          </radialGradient>
          <linearGradient
            id="b"
            gradientUnits="userSpaceOnUse"
            x1="400"
            y1="148"
            x2="400"
            y2="333"
          >
            <stop offset="0" stop-color="#FA3" stop-opacity="0" />
            <stop offset="1" stop-color="#FA3" stop-opacity="0.5" />
          </linearGradient>
        </defs>
        <rect fill="url(#a)" width="800" height="400" />
        <g fill-opacity="0.4">
          <circle fill="url(#b)" cx="267.5" cy="61" r="300" />
          <circle fill="url(#b)" cx="532.5" cy="61" r="300" />
          <circle fill="url(#b)" cx="400" cy="30" r="300" />
        </g>
      </svg>
    );
  },
  Scales: (props: BackgroundProps) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 1000" {...props}>
        <rect fill="#330055" width="100" height="1000" />
        <g fill-opacity="1">
          <circle fill="#330055" cx="50" cy="0" r="50" />
          <g fill="#3a015d">
            <circle cx="0" cy="50" r="50" />
            <circle cx="100" cy="50" r="50" />
          </g>
          <circle fill="#410165" cx="50" cy="100" r="50" />
          <g fill="#48026e">
            <circle cx="0" cy="150" r="50" />
            <circle cx="100" cy="150" r="50" />
          </g>
          <circle fill="#500376" cx="50" cy="200" r="50" />
          <g fill="#57047e">
            <circle cx="0" cy="250" r="50" />
            <circle cx="100" cy="250" r="50" />
          </g>
          <circle fill="#5f0587" cx="50" cy="300" r="50" />
          <g fill="#67068f">
            <circle cx="0" cy="350" r="50" />
            <circle cx="100" cy="350" r="50" />
          </g>
          <circle fill="#6f0798" cx="50" cy="400" r="50" />
          <g fill="#7707a0">
            <circle cx="0" cy="450" r="50" />
            <circle cx="100" cy="450" r="50" />
          </g>
          <circle fill="#8008a9" cx="50" cy="500" r="50" />
          <g fill="#8909b1">
            <circle cx="0" cy="550" r="50" />
            <circle cx="100" cy="550" r="50" />
          </g>
          <circle fill="#9109ba" cx="50" cy="600" r="50" />
          <g fill="#9a09c3">
            <circle cx="0" cy="650" r="50" />
            <circle cx="100" cy="650" r="50" />
          </g>
          <circle fill="#a309cb" cx="50" cy="700" r="50" />
          <g fill="#ad09d4">
            <circle cx="0" cy="750" r="50" />
            <circle cx="100" cy="750" r="50" />
          </g>
          <circle fill="#b608dc" cx="50" cy="800" r="50" />
          <g fill="#c007e5">
            <circle cx="0" cy="850" r="50" />
            <circle cx="100" cy="850" r="50" />
          </g>
          <circle fill="#c905ee" cx="50" cy="900" r="50" />
          <g fill="#d303f6">
            <circle cx="0" cy="950" r="50" />
            <circle cx="100" cy="950" r="50" />
          </g>
          <circle fill="#D0F" cx="50" cy="1000" r="50" />
        </g>
      </svg>
    );
  },
  Shapes: (props: BackgroundProps) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" {...props}>
        <rect fill="#ffffff" width="1600" height="900" />
        <defs>
          <linearGradient
            id="a"
            x1="0"
            x2="0"
            y1="1"
            y2="0"
            gradientTransform="rotate(0,0.5,0.5)"
          >
            <stop offset="0" stop-color="#0FF" />
            <stop offset="1" stop-color="#CF6" />
          </linearGradient>
          <linearGradient
            id="b"
            x1="0"
            x2="0"
            y1="0"
            y2="1"
            gradientTransform="rotate(0,0.5,0.5)"
          >
            <stop offset="0" stop-color="#F00" />
            <stop offset="1" stop-color="#FC0" />
          </linearGradient>
        </defs>
        <g fill="#FFF" fill-opacity="0" stroke-miterlimit="10">
          <g stroke="url(#a)" stroke-width="2">
            <path
              transform="translate(-96.25 22) rotate(13.75 1409 581) scale(1.055)"
              d="M1409 581 1450.35 511 1490 581z"
            />
            <circle
              stroke-width="4"
              transform="translate(-55 55) rotate(16.5 800 450) scale(1.028)"
              cx="500"
              cy="100"
              r="40"
            />
            <path
              transform="translate(49.5 -165) rotate(165 401 736) scale(1.028)"
              d="M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z"
            />
          </g>
          <g stroke="url(#b)" stroke-width="4">
            <path
              transform="translate(330 -22) rotate(5.5 150 345) scale(0.945)"
              d="M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z"
            />
            <rect
              stroke-width="8"
              transform="translate(-220 -137.5) rotate(198 1089 759)"
              x="1039"
              y="709"
              width="100"
              height="100"
            />
            <path
              transform="translate(-330 110) rotate(33 1400 132)"
              d="M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z"
            />
          </g>
        </g>
      </svg>
    );
  },
  Spiral: (props: BackgroundProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 1500"
        {...props}
      >
        <rect fill="#000000" width="2000" height="1500" />
        <defs>
          <circle
            stroke="#D60"
            vector-effect="non-scaling-stroke"
            id="a"
            fill="none"
            stroke-width="5"
            r="315"
          />
          <use id="f" href="#a" stroke-dasharray="100 100 100 9999" />
          <use id="b" href="#a" stroke-dasharray="250 250 250 250 250 9999" />
          <use id="e" href="#a" stroke-dasharray="1000 500 1000 500 9999" />
          <use id="g" href="#a" stroke-dasharray="1500 9999" />
          <use id="h" href="#a" stroke-dasharray="2000 500 500 9999" />
          <use id="j" href="#a" stroke-dasharray="800 800 800 800 800 9999" />
          <use
            id="k"
            href="#a"
            stroke-dasharray="1200 1200 1200 1200 1200 9999"
          />
          <use
            id="l"
            href="#a"
            stroke-dasharray="1600 1600 1600 1600 1600 9999"
          />
        </defs>
        <g transform="translate(1000 750)" stroke-opacity="1">
          <g transform="rotate(0 0 0)">
            <circle fill="#D60" fill-opacity="1" r="10" />
            <g transform="rotate(0 0 0)">
              <use href="#f" transform="scale(.1) rotate(50 0 0)" />
              <use href="#f" transform="scale(.2) rotate(100 0 0)" />
              <use href="#f" transform="scale(.3) rotate(150 0 0)" />
            </g>
            <g transform="rotate(0 0 0)">
              <use href="#b" transform="scale(.4) rotate(200 0 0)" />
              <use href="#z" transform="scale(.5) rotate(250 0 0)" />
            </g>
            <g id="z" transform="rotate(0 0 0)">
              <g transform="rotate(0 0 0)">
                <use href="#b" />
                <use href="#b" transform="scale(1.2) rotate(90 0 0)" />
                <use href="#b" transform="scale(1.4) rotate(60 0 0)" />
                <use href="#e" transform="scale(1.6) rotate(120 0 0)" />
                <use href="#e" transform="scale(1.8) rotate(30 0 0)" />
              </g>
            </g>
            <g id="y" transform="rotate(0 0 0)">
              <g transform="rotate(0 0 0)">
                <use href="#e" transform="scale(1.1) rotate(20 0 0)" />
                <use href="#g" transform="scale(1.3) rotate(-40 0 0)" />
                <use href="#g" transform="scale(1.5) rotate(60 0 0)" />
                <use href="#h" transform="scale(1.7) rotate(-80 0 0)" />
                <use href="#j" transform="scale(1.9) rotate(100 0 0)" />
              </g>
            </g>
            <g transform="rotate(0 0 0)">
              <g transform="rotate(0 0 0)">
                <g transform="rotate(0 0 0)">
                  <use href="#h" transform="scale(2) rotate(60 0 0)" />
                  <use href="#j" transform="scale(2.1) rotate(120 0 0)" />
                  <use href="#j" transform="scale(2.3) rotate(180 0 0)" />
                  <use href="#h" transform="scale(2.4) rotate(240 0 0)" />
                  <use href="#j" transform="scale(2.5) rotate(300 0 0)" />
                </g>
                <use href="#y" transform="scale(2) rotate(180 0 0)" />
                <use href="#j" transform="scale(2.7)" />
                <use href="#j" transform="scale(2.8) rotate(45 0 0)" />
                <use href="#j" transform="scale(2.9) rotate(90 0 0)" />
                <use href="#k" transform="scale(3.1) rotate(135 0 0)" />
                <use href="#k" transform="scale(3.2) rotate(180 0 0)" />
              </g>
              <use href="#k" transform="scale(3.3) rotate(225 0 0)" />
              <use href="#k" transform="scale(3.5) rotate(270 0 0)" />
              <use href="#k" transform="scale(3.6) rotate(315 0 0)" />
              <use href="#k" transform="scale(3.7)" />
              <use href="#k" transform="scale(3.9) rotate(75 0 0)" />
            </g>
          </g>
        </g>
      </svg>
    );
  },
  Squares: (props: BackgroundProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 1500"
        {...props}
      >
        <rect fill="#ffffff" width="2000" height="1500" />
        <defs>
          <rect
            stroke="#ffffff"
            stroke-width=".5"
            width="1"
            height="1"
            id="s"
          />
          <pattern
            id="a"
            width="3"
            height="3"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(50) translate(-980 -735)"
          >
            <use fill="#fcfcfc" href="#s" y="2" />
            <use fill="#fcfcfc" href="#s" x="1" y="2" />
            <use fill="#fafafa" href="#s" x="2" y="2" />
            <use fill="#fafafa" href="#s" />
            <use fill="#f7f7f7" href="#s" x="2" />
            <use fill="#f7f7f7" href="#s" x="1" y="1" />
          </pattern>
          <pattern
            id="b"
            width="7"
            height="11"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(50) translate(-980 -735)"
          >
            <g fill="#f5f5f5">
              <use href="#s" />
              <use href="#s" y="5" />
              <use href="#s" x="1" y="10" />
              <use href="#s" x="2" y="1" />
              <use href="#s" x="2" y="4" />
              <use href="#s" x="3" y="8" />
              <use href="#s" x="4" y="3" />
              <use href="#s" x="4" y="7" />
              <use href="#s" x="5" y="2" />
              <use href="#s" x="5" y="6" />
              <use href="#s" x="6" y="9" />
            </g>
          </pattern>
          <pattern
            id="h"
            width="5"
            height="13"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(50) translate(-980 -735)"
          >
            <g fill="#f5f5f5">
              <use href="#s" y="5" />
              <use href="#s" y="8" />
              <use href="#s" x="1" y="1" />
              <use href="#s" x="1" y="9" />
              <use href="#s" x="1" y="12" />
              <use href="#s" x="2" />
              <use href="#s" x="2" y="4" />
              <use href="#s" x="3" y="2" />
              <use href="#s" x="3" y="6" />
              <use href="#s" x="3" y="11" />
              <use href="#s" x="4" y="3" />
              <use href="#s" x="4" y="7" />
              <use href="#s" x="4" y="10" />
            </g>
          </pattern>
          <pattern
            id="c"
            width="17"
            height="13"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(50) translate(-980 -735)"
          >
            <g fill="#f2f2f2">
              <use href="#s" y="11" />
              <use href="#s" x="2" y="9" />
              <use href="#s" x="5" y="12" />
              <use href="#s" x="9" y="4" />
              <use href="#s" x="12" y="1" />
              <use href="#s" x="16" y="6" />
            </g>
          </pattern>
          <pattern
            id="d"
            width="19"
            height="17"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(50) translate(-980 -735)"
          >
            <g fill="#ffffff">
              <use href="#s" y="9" />
              <use href="#s" x="16" y="5" />
              <use href="#s" x="14" y="2" />
              <use href="#s" x="11" y="11" />
              <use href="#s" x="6" y="14" />
            </g>
            <g fill="#efefef">
              <use href="#s" x="3" y="13" />
              <use href="#s" x="9" y="7" />
              <use href="#s" x="13" y="10" />
              <use href="#s" x="15" y="4" />
              <use href="#s" x="18" y="1" />
            </g>
          </pattern>
          <pattern
            id="e"
            width="47"
            height="53"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(50) translate(-980 -735)"
          >
            <g fill="#F60">
              <use href="#s" x="2" y="5" />
              <use href="#s" x="16" y="38" />
              <use href="#s" x="46" y="42" />
              <use href="#s" x="29" y="20" />
            </g>
          </pattern>
          <pattern
            id="f"
            width="59"
            height="71"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(50) translate(-980 -735)"
          >
            <g fill="#F60">
              <use href="#s" x="33" y="13" />
              <use href="#s" x="27" y="54" />
              <use href="#s" x="55" y="55" />
            </g>
          </pattern>
          <pattern
            id="g"
            width="139"
            height="97"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(50) translate(-980 -735)"
          >
            <g fill="#F60">
              <use href="#s" x="11" y="8" />
              <use href="#s" x="51" y="13" />
              <use href="#s" x="17" y="73" />
              <use href="#s" x="99" y="57" />
            </g>
          </pattern>
        </defs>
        <rect fill="url(#a)" width="100%" height="100%" />
        <rect fill="url(#b)" width="100%" height="100%" />
        <rect fill="url(#h)" width="100%" height="100%" />
        <rect fill="url(#c)" width="100%" height="100%" />
        <rect fill="url(#d)" width="100%" height="100%" />
        <rect fill="url(#e)" width="100%" height="100%" />
        <rect fill="url(#f)" width="100%" height="100%" />
        <rect fill="url(#g)" width="100%" height="100%" />
      </svg>
    );
  },
} as const;

export type BackgroundId = keyof typeof Backgrounds;
