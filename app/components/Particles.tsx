"use client";

export default function Particles() {
  // Number of particles you want to display
  const particleCount = 150;

  // Generate an array of particles with unique properties
  const particles = Array.from({ length: particleCount }).map((_, index) => ({
    id: index,
    size: Math.random() * 3 + 1, // Random size between 1px and 4px
    duration: Math.random() * 3, // Random animation duration between 2s and 5s
    delay: Math.random() * 5, // Random delay between 0s and 5s to start animation
    left: Math.random() * 100, // Random starting position from 0% to 100% of the parent width
  }));

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        top: 0,
        left: 0,
      }}
    >
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `fall ${particle.duration}s linear ${particle.delay}s infinite`,
            left: `${particle.left}%`,
            top: "-10px", // Start above the screen to make sure particles "fall" into view
          }}
        ></div>
      ))}
    </div>
  );
}
