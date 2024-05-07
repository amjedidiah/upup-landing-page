import Particles from "./components/Particles";
import RocketSVG from "./components/RocketSVG";
import TitleAndShit from "./components/TitleAndShit";
import Navbar from "./components/Navbar"; // Assuming Navbar is in components folder

export default function Home() {
  return (
    <>
      <div className="pt-16 md:pt-20 bg-mobile"> {/* Adjust padding top value as per the height of your Navbar */}
        <div className="h-full grid grid-cols-1 md:grid-cols-[minmax(0,1fr),50vw] overflow-hidden">
          <TitleAndShit />
          <div className="overflow-hidden relative bg-gradient-to-tr from-sky-500 via-blue-700 to-blue-950 hidden md:flex">
            <div
              className="size-0"
              style={{
                borderLeft: `var(--triangle-width-large) solid transparent`,
                borderRight: "0 solid transparent",
                borderBottom: `var(--triangle-height-large) solid white`,
                transform: "rotateX(180deg) rotateY(180deg)",
              }}
            ></div>
            <RocketSVG className="absolute top-1/2 left-1/2 h-1/2 z-20" />
            <Particles />
          </div>
        </div>
      </div>
    </>
  );
}