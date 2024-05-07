"use client";

import { motion } from "framer-motion";

export default function RocketSVG({ className }: { className?: string }) {
  const size = "min(40vw, 70vh)"; // This will take the smaller value between 40% of viewport width and 70% of viewport height
  return (
    <motion.svg
      width="429"
      height="943"
      viewBox="0 0 429 943"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // className={className}
      // initial={{ y: "-50%", x: "-37%" }}
      // animate={{
      //   y: "-50%",
      //   x: ["-37.3%", "-36.7%"],
      // }}
      // transition={{
      //   duration: 0.05,
      //   repeat: Infinity,
      //   repeatType: "reverse",
      // }}
      className={className}
      initial={{ y: "-50%", x: "-50%" }} // Center the SVG
      animate={{
        y: "-50%",
        x: ["-50%", "-50%"], // Keep it centered on the x-axis
      }}
      transition={{
        duration: 0.05,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      style={{
        height: size, // Set both the height and width to be responsive
        width: size,
        maxWidth: "429px", // Set a maxWidth and maxHeight to make sure it doesn't scale beyond the original size
        maxHeight: "943px",
      }}
    >
      <g id="Group">
        <motion.g>
          <motion.g
            id="Layer 1" // fire animation
            initial={{ y: "0%" }}
            animate={{
              y: ["-3%", "0%"],
            }}
            transition={{
              duration: 0.05,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <path
              id="orangerfire"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M181.7 684.541C180.11 686.361 155.76 699.801 155.76 699.801C155.76 699.801 151.9 703.651 146.44 722.311C140.98 740.971 139.16 759.161 139.16 757.571C139.16 755.981 149.85 743.691 149.85 743.691C149.85 743.691 145.07 766.691 144.85 787.601C144.63 808.511 147.58 827.601 147.36 825.141C147.14 822.681 154.18 804.891 154.18 804.891C154.18 804.891 156.46 829.891 165.1 852.671C173.74 875.451 180.1 887.251 179.66 884.061C179.22 880.871 185.58 859.061 185.58 859.061C185.58 859.061 189.22 890.451 201.96 918.211C206.67 928.471 210.44 936.361 213.34 942.211C216.23 936.331 220 928.441 224.71 918.211C237.44 890.431 241.11 859.041 241.11 859.041C241.11 859.041 247.48 880.881 247.03 884.041C246.58 887.201 252.94 875.401 261.59 852.651C270.24 829.901 272.51 804.871 272.51 804.871C272.51 804.871 279.51 822.621 279.33 825.121C279.15 827.621 282.07 808.511 281.84 787.581C281.61 766.651 276.84 743.671 276.84 743.671C276.84 743.671 287.53 755.961 287.53 757.551C287.53 759.141 285.71 740.941 280.25 722.291C274.79 703.641 270.93 699.781 270.93 699.781C270.93 699.781 246.58 686.341 244.99 684.521L213.37 683.631L181.7 684.541Z"
              fill="#F9B059"
            />
            <path
              id="orangefire"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M158.7 718.109L167.87 707.819L160.08 745.819C158.374 754.142 157.095 762.546 156.25 770.999L160.48 760.189L164.57 803.949C166.086 819.324 169.543 834.444 174.86 848.949C175.38 850.319 175.86 851.689 176.44 853.049L190.11 806.589L195.98 857.839C198.06 875.719 204.05 897.639 211.48 913.839L213.37 917.929C214 916.569 214.62 915.199 215.25 913.839C222.68 897.649 228.67 875.729 230.75 857.839L236.62 806.579L250.22 853.109C250.75 851.749 251.28 850.379 251.8 849.009C257.109 834.502 260.563 819.383 262.08 804.009L266.17 760.249L270.4 771.059C269.555 762.606 268.276 754.202 266.57 745.879L258.78 707.879L267.95 718.109C266.847 714.566 265.435 711.126 263.73 707.829C259.983 705.749 256.247 703.643 252.52 701.509C249.98 700.049 245.14 697.439 241.41 694.939L213.33 694.109L185.25 694.899C181.51 697.399 176.68 700.009 174.13 701.469C170.41 703.603 166.673 705.709 162.92 707.789C161.212 711.099 159.8 714.552 158.7 718.109Z"
              fill="#F3CE78"
            />
            <path
              id="whitefire"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M213.33 881.63C215.569 873.355 217.209 864.93 218.24 856.42L231.16 743.57L249.33 805.47L254.54 749.64L246.99 712.75L246.28 712.35C243.37 710.68 240.45 709.08 237.59 707.35L213.33 706.67L189.06 707.35C186.21 709.09 183.28 710.69 180.37 712.35L179.67 712.75L172.36 748.38C172.36 749.09 172.26 750.21 172.23 750.91L177.32 805.47L195.49 743.57L208.41 856.41C209.438 864.924 211.082 873.353 213.33 881.63Z"
              fill="#F3F0EB"
            />
          </motion.g>
          <path
            id="Vector"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M159.33 650.109H268.82L286.06 714.819H142.09L159.33 650.109Z"
            fill="url(#paint0_linear_621_160)"
          />
          <path
            id="Vector_2"
            opacity="0.17"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M155.16 665.779H159.73C158.03 672.679 156.22 680.039 154.3 687.859C152.253 696.233 150.047 705.233 147.68 714.859H142.11C144.683 705.253 147.08 696.253 149.3 687.859C151.367 680.026 153.32 672.666 155.16 665.779Z"
            fill="white"
          />
          <path
            id="Vector_3"
            opacity="0.17"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M166.47 665.779H171.05L166.76 687.859C165.133 696.233 163.383 705.233 161.51 714.859H155.91C157.977 705.253 159.913 696.253 161.72 687.859C163.4 680.026 164.983 672.666 166.47 665.779Z"
            fill="white"
          />
          <path
            id="Vector_4"
            opacity="0.17"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M177.79 665.779H182.38C181.387 672.679 180.33 680.039 179.21 687.859C178.01 696.233 176.723 705.233 175.35 714.859H169.75C171.33 705.253 172.803 696.253 174.17 687.859C175.463 680.026 176.67 672.666 177.79 665.779Z"
            fill="white"
          />
          <path
            id="Vector_5"
            opacity="0.17"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M189.11 665.779H193.69C193.057 672.679 192.39 680.039 191.69 687.859C190.923 696.233 190.093 705.233 189.2 714.859H183.6C184.687 705.253 185.687 696.253 186.6 687.859C187.5 680.026 188.337 672.666 189.11 665.779Z"
            fill="white"
          />
          <path
            id="Vector_6"
            opacity="0.17"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M200.44 665.779H205.03C204.75 672.666 204.443 680.026 204.11 687.859C203.77 696.233 203.403 705.233 203.01 714.859H197.41C197.997 705.253 198.55 696.253 199.07 687.859C199.57 680.026 200.027 672.666 200.44 665.779Z"
            fill="white"
          />
          <path
            id="Vector_7"
            opacity="0.17"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M211.77 665.779H216.35C216.417 672.679 216.493 680.039 216.58 687.859C216.66 696.233 216.753 705.233 216.86 714.859H211.26C211.36 705.253 211.453 696.253 211.54 687.859C211.62 680.026 211.697 672.666 211.77 665.779Z"
            fill="white"
          />
          <path
            id="Vector_8"
            opacity="0.17"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M223.11 665.779H227.7C228.12 672.679 228.57 680.039 229.05 687.859C229.57 696.233 230.123 705.233 230.71 714.859H225.11C224.717 705.253 224.35 696.253 224.01 687.859C223.677 680.026 223.377 672.666 223.11 665.779Z"
            fill="white"
          />
          <path
            id="Vector_9"
            opacity="0.17"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M234.42 665.779H239C239.78 672.689 240.61 680.029 241.49 687.859C242.43 696.229 243.49 705.189 244.49 714.859H238.89C238 705.239 237.18 696.279 236.41 687.859C235.717 680.026 235.053 672.666 234.42 665.779Z"
            fill="white"
          />
          <path
            id="Vector_10"
            opacity="0.17"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M245.74 665.779H250.32C251.46 672.689 252.66 680.029 253.94 687.859C255.32 696.229 256.79 705.189 258.36 714.859H252.76C251.38 705.239 250.1 696.279 248.9 687.859L245.74 665.779Z"
            fill="white"
          />
          <path
            id="Vector_11"
            opacity="0.17"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M257.11 665.779H261.69C263.18 672.689 264.76 680.029 266.44 687.859L272.24 714.859H266.64C264.77 705.239 263.02 696.279 261.4 687.859C259.84 680.029 258.41 672.689 257.11 665.779Z"
            fill="white"
          />
          <path
            id="Vector_12"
            opacity="0.17"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M268.39 665.779H273C274.84 672.689 276.8 680.029 278.88 687.859C281.11 696.229 283.5 705.189 286.06 714.859H280.43C278.07 705.239 275.87 696.279 273.81 687.859C271.89 680.029 270.11 672.689 268.39 665.779Z"
            fill="white"
          />
          <path
            id="Vector_13"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M120.11 551.01C117.87 552.8 21.25 617.73 15.28 627.13C9.31 636.53 -0.0100098 737.3 -0.0100098 737.3L45.87 679.98L138.52 660.98L120.11 551.01Z"
            fill="url(#paint1_linear_621_160)"
          />
          <g id="Vector_14" style={{ mixBlendMode: "screen" }} opacity="0.24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M116.78 609.51C85.78 621.57 41.64 639 41.64 639L0 737.3L45.88 679.98L138.53 660.98C130.262 644.271 122.999 627.084 116.78 609.51Z"
              fill="#DB6E0F"
            />
          </g>
          <g id="Vector_15" style={{ mixBlendMode: "screen" }} opacity="0.24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M41.65 639L0 737.3L45.88 679.98L41.65 639Z"
              fill="#CE6612"
            />
          </g>
          <path
            id="Vector_16"
            opacity="0.25"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M101.66 570.359L106.65 591.589L27.7001 635.909L7.6001 692.489L18.5701 628.139L101.66 570.359Z"
            fill="#EA926A"
          />
          <path
            id="Vector_17"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M308.11 551.01C310.35 552.8 406.97 617.73 412.94 627.13C418.91 636.53 428.23 737.3 428.23 737.3L382.35 679.98L289.7 660.98L308.11 551.01Z"
            fill="url(#paint2_linear_621_160)"
          />
          <g id="Vector_18" style={{ mixBlendMode: "screen" }} opacity="0.24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M311.44 609.51C342.44 621.57 386.58 639 386.58 639L428.22 737.3L382.34 679.98L289.69 660.98C297.958 644.271 305.221 627.084 311.44 609.51Z"
              fill="#DB6E0F"
            />
          </g>
          <g id="Vector_19" style={{ mixBlendMode: "screen" }} opacity="0.24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M386.58 639L428.22 737.3L382.34 679.98L386.58 639Z"
              fill="#CE6612"
            />
          </g>
          <path
            id="Vector_20"
            opacity="0.25"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M326.56 570.359L321.58 591.589L400.53 635.909L420.62 692.489L409.65 628.139L326.56 570.359Z"
            fill="#EA926A"
          />
          <path
            id="Vector_21"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M214.11 0C348.87 169.41 387.53 464 289.65 661H138.53C40.6501 463.95 79.3201 169.41 214.11 0Z"
            fill="#E8EDEF"
          />
          <path
            id="Vector_22"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M214.11 0C170.49 54.79 136.95 122.69 114.84 196.11H313.31C291.2 122.69 257.67 54.79 214.11 0Z"
            fill="url(#paint3_linear_621_160)"
          />
          <path
            id="Vector_23"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M313.31 196.11H114.84C113.267 201.31 111.76 206.537 110.32 211.79H317.84C316.387 206.544 314.877 201.317 313.31 196.11Z"
            fill="#74288B"
          />
          <path
            id="Vector_24"
            d="M223.153 429.993C263.776 424.991 292.652 388.004 287.65 347.381C282.648 306.758 245.661 277.882 205.038 282.884C164.415 287.886 135.539 324.873 140.541 365.496C145.543 406.119 182.53 434.995 223.153 429.993Z"
            fill="#E37D7D"
          />
          <path
            id="Vector_25"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M214.11 420.04C226.687 420.04 238.981 416.311 249.439 409.324C259.896 402.336 268.047 392.405 272.86 380.785C277.673 369.166 278.932 356.38 276.478 344.045C274.025 331.709 267.968 320.379 259.075 311.485C250.182 302.592 238.851 296.536 226.516 294.082C214.181 291.629 201.395 292.888 189.775 297.701C178.156 302.514 168.224 310.664 161.237 321.122C154.25 331.579 150.52 343.873 150.52 356.45C150.554 373.305 157.265 389.459 169.183 401.377C181.101 413.295 197.255 420.006 214.11 420.04Z"
            fill="url(#paint4_radial_621_160)"
          />
          <g id="Vector_26" style={{ mixBlendMode: "screen" }} opacity="0.25">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M271.88 348.2C271.88 357.338 270.08 366.388 266.583 374.831C263.085 383.274 257.959 390.945 251.497 397.407C245.035 403.869 237.364 408.995 228.921 412.493C220.478 415.99 211.429 417.79 202.29 417.79C200.29 417.79 198.29 417.7 196.36 417.54C209.099 421.234 222.675 420.852 235.187 416.449C247.699 412.045 258.521 403.84 266.138 392.981C273.756 382.122 277.788 369.154 277.67 355.89C277.552 342.626 273.29 329.731 265.48 319.01C269.711 328.158 271.895 338.12 271.88 348.2Z"
              fill="#1BA1C8"
            />
          </g>
          <path
            id="Vector_27"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M214.08 285.92L215.02 286.37L215.96 286.82L216.19 287.84L216.43 288.86L215.77 289.68L215.12 290.49H214.08H213.03L212.38 289.68L211.73 288.86L211.97 287.84L212.2 286.82L213.14 286.37L214.08 285.92Z"
            fill="#30597D"
          />
          <path
            id="Vector_28"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M164.2 306.58L165.19 306.23L166.17 305.89L167.06 306.44L167.94 307L168.06 308.04L168.18 309.07L167.44 309.81L166.7 310.55L165.66 310.43L164.62 310.32L164.07 309.43L163.51 308.55L163.86 307.56L164.2 306.58Z"
            fill="#30597D"
          />
          <path
            id="Vector_29"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M143.54 356.45L143.99 355.51L144.45 354.57L145.47 354.34L146.48 354.11L147.3 354.76L148.12 355.41V356.45V357.5L147.3 358.15L146.48 358.8L145.47 358.57L144.45 358.34L143.99 357.4L143.54 356.45Z"
            fill="#30597D"
          />
          <path
            id="Vector_30"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M164.2 406.33L163.86 405.35L163.51 404.36L164.07 403.48L164.62 402.59L165.66 402.48L166.7 402.36L167.44 403.1L168.18 403.83L168.06 404.87L167.94 405.91L167.06 406.47L166.17 407.02L165.19 406.68L164.2 406.33Z"
            fill="#30597D"
          />
          <path
            id="Vector_31"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M214.08 426.99L213.14 426.54L212.2 426.08L211.97 425.07L211.73 424.05L212.38 423.23L213.03 422.42H214.08H215.12L215.77 423.23L216.43 424.05L216.19 425.07L215.96 426.08L215.02 426.54L214.08 426.99Z"
            fill="#30597D"
          />
          <path
            id="Vector_32"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M263.96 406.33L262.97 406.68L261.99 407.02L261.1 406.47L260.22 405.91L260.1 404.87L259.98 403.83L260.72 403.1L261.46 402.36L262.5 402.48L263.53 402.59L264.09 403.48L264.65 404.36L264.3 405.35L263.96 406.33Z"
            fill="#30597D"
          />
          <path
            id="Vector_33"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M284.62 356.45L284.16 357.4L283.71 358.34L282.69 358.57L281.67 358.8L280.86 358.15L280.04 357.5V356.45V355.41L280.86 354.76L281.67 354.11L282.69 354.34L283.71 354.57L284.16 355.51L284.62 356.45Z"
            fill="#30597D"
          />
          <path
            id="Vector_34"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M263.96 306.58L264.3 307.56L264.65 308.55L264.09 309.43L263.53 310.32L262.5 310.43L261.46 310.55L260.72 309.81L259.98 309.07L260.1 308.04L260.22 307L261.1 306.44L261.99 305.89L262.97 306.23L263.96 306.58Z"
            fill="#30597D"
          />
          <path
            id="Vector_35"
            d="M289.63 660.971H138.53V685.251H289.63V660.971Z"
            fill="#74288B"
          />
          <path
            id="Vector_36"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M149.54 669.57L151.18 670.36L152.81 671.15L153.22 672.92L153.62 674.69L152.49 676.11L151.36 677.53H149.54H147.73L146.59 676.11L145.46 674.69L145.86 672.92L146.27 671.15L147.9 670.36L149.54 669.57Z"
            fill="#303030"
          />
          <path
            id="Vector_37"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M181.81 669.57L183.45 670.36L185.08 671.15L185.49 672.92L185.89 674.69L184.76 676.11L183.63 677.53H181.81H179.99L178.86 676.11L177.73 674.69L178.13 672.92L178.54 671.15L180.17 670.36L181.81 669.57Z"
            fill="#303030"
          />
          <path
            id="Vector_38"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M214.08 669.57L215.72 670.36L217.35 671.15L217.75 672.92L218.16 674.69L217.03 676.11L215.89 677.53H214.08H212.26L211.13 676.11L210 674.69L210.4 672.92L210.81 671.15L212.44 670.36L214.08 669.57Z"
            fill="#303030"
          />
          <path
            id="Vector_39"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M246.35 669.57L247.99 670.36L249.62 671.15L250.03 672.92L250.43 674.69L249.3 676.11L248.16 677.53H246.35H244.53L243.4 676.11L242.27 674.69L242.67 672.92L243.08 671.15L244.71 670.36L246.35 669.57Z"
            fill="#303030"
          />
          <path
            id="Vector_40"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M278.62 669.57L280.25 670.36L281.89 671.15L282.29 672.92L282.7 674.69L281.56 676.11L280.43 677.53H278.62H276.8L275.67 676.11L274.54 674.69L274.94 672.92L275.35 671.15L276.98 670.36L278.62 669.57Z"
            fill="#303030"
          />
          <path
            id="Vector_41"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M214.08 563L225.93 608.21L214.08 737.3V563Z"
            fill="url(#paint5_linear_621_160)"
          />
          <path
            id="Vector_42"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M214.08 563L202.23 608.21L214.08 737.3V563Z"
            fill="url(#paint6_linear_621_160)"
          />
          <path
            id="Vector_43"
            opacity="0.46"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M206.96 19.5498C192.21 31.0198 143.96 145.22 131.88 181.44H176.97C183.3 130.9 192.11 73.3598 206.96 19.5498Z"
            fill="#EA926A"
          />
          <path
            id="Vector_44"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M116.04 226.76C116.04 226.76 97.8 308.84 97.23 378.39C96.95 413.17 109.16 596.03 135.43 617.23L181.03 615.52V434.82C121.33 421.11 111.77 309.04 183.6 274.11L182.74 223.38C160.3 223.34 138.46 225.34 116.04 226.76Z"
            fill="#FDFDFD"
          />
          <g id="Vector_45" style={{ mixBlendMode: "screen" }} opacity="0.25">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M202.11 410.83C177.59 408.83 158.21 384.97 158.21 355.77C158.21 326.57 177.59 302.67 202.11 300.71V410.83Z"
              fill="#35B1D0"
            />
          </g>
        </motion.g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_621_160"
          x1="214.08"
          y1="754.979"
          x2="214.08"
          y2="661.929"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F75A1A" />
          <stop offset="0.19" stopColor="#F5591D" />
          <stop offset="0.31" stopColor="#EF5426" />
          <stop offset="0.43" stopColor="#E44C35" />
          <stop offset="0.53" stopColor="#D5414B" />
          <stop offset="0.62" stopColor="#C23367" />
          <stop offset="0.71" stopColor="#AB2288" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_621_160"
          x1="-20.49"
          y1="347.29"
          x2="120.42"
          y2="866.62"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F75A1A" />
          <stop offset="0.19" stopColor="#F5591D" />
          <stop offset="0.31" stopColor="#EF5426" />
          <stop offset="0.43" stopColor="#E44C35" />
          <stop offset="0.53" stopColor="#D5414B" />
          <stop offset="0.62" stopColor="#C23367" />
          <stop offset="0.71" stopColor="#AB2288" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_621_160"
          x1="448.71"
          y1="347.29"
          x2="307.8"
          y2="866.62"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F75A1A" />
          <stop offset="0.19" stopColor="#F5591D" />
          <stop offset="0.31" stopColor="#EF5426" />
          <stop offset="0.43" stopColor="#E44C35" />
          <stop offset="0.53" stopColor="#D5414B" />
          <stop offset="0.62" stopColor="#C23367" />
          <stop offset="0.71" stopColor="#AB2288" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_621_160"
          x1="114.84"
          y1="98.06"
          x2="313.31"
          y2="98.06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F75A1A" />
          <stop offset="0.71" stopColor="#AB2288" />
        </linearGradient>
        <radialGradient
          id="paint4_radial_621_160"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(213.02 307.66) scale(103.92 103.92)"
        >
          <stop stopColor="#D84FA5" />
          <stop offset="1" stopColor="#361987" />
        </radialGradient>
        <linearGradient
          id="paint5_linear_621_160"
          x1="95.6202"
          y1="632.94"
          x2="295.76"
          y2="662.02"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F75A1A" />
          <stop offset="0.19" stopColor="#F5591D" />
          <stop offset="0.31" stopColor="#EF5426" />
          <stop offset="0.43" stopColor="#E44C35" />
          <stop offset="0.53" stopColor="#D5414B" />
          <stop offset="0.62" stopColor="#C23367" />
          <stop offset="0.71" stopColor="#AB2288" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_621_160"
          x1="251.18"
          y1="644.73"
          x2="175.06"
          y2="655.85"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F75A1A" />
          <stop offset="0.19" stopColor="#F5591D" />
          <stop offset="0.31" stopColor="#EF5426" />
          <stop offset="0.43" stopColor="#E44C35" />
          <stop offset="0.53" stopColor="#D5414B" />
          <stop offset="0.62" stopColor="#C23367" />
          <stop offset="0.71" stopColor="#AB2288" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
