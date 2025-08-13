import { Engine, Container, ISourceOptions } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import { useCallback } from "react";

const ParticlesBackground = () => {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options: ISourceOptions = {
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    detectRetina: true,
    fpsLimit: 60,
    particles: {
      color: { value: ["#60a5fa", "#a78bfa", "#22d3ee"] },
      links: { enable: true, color: "#60a5fa", distance: 120, opacity: 0.2 },
      move: { enable: true, speed: 1, outModes: { default: "out" }, angle: 10 },
      number: { value: 60, density: { enable: true, area: 800 } },
      opacity: { value: { min: 0.2, max: 0.6 } },
      size: { value: { min: 1, max: 3 } },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: { enable: true, mode: ["repulse", "grab"] },
          onClick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.3 } },
          repulse: { distance: 120 },
          push: { quantity: 2 },
        },
      },
    },
  };

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Particles id="tsparticles" init={init} options={options} />
    </div>
  );
};

export default ParticlesBackground;
