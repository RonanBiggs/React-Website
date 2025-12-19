import Particles from "react-tsparticles";
import { loadSlim} from "tsparticles-slim";
import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

export const ParticlesComponent = () => {
  const options = useMemo(() => {

    return {
// This ensures the particles fill the entire background
      fullScreen: {
        enable: true,
        zIndex: -1, // Places it behind your text boxes
      },
      particles: {
        collisions: {
          enable: true,
          mode: "bounce",
        },
        number: {
          value: 150, // Number of particles
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#ffffff", // Particle color
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: { min: 3, max: 6 },
        },
        links: {
          enable: true, // Draws lines between nearby particles
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "out",
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab", // Lines will 'grab' onto your mouse
          },
        },
        modes: {
          repulse: {
            distance: 20,
            duration: 150,
          }
        }
      },
      detectRetina: true,

    };
  }, []);

  const particlesInit = useCallback((engine) => {
    //loadSlim(engine);
    loadSlim(engine); //slim is smaller but lacks some plugins like mouse trail
  }, []);

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};


const cur_y = 0;
const cur_x = 0;

export const BubblesComponent = () => {
  const options = useMemo(() => {
    //takes in a real # count, for number of rings, produces an array of positions for points along that hexagons rings 
  const generateBubbles = (count) => {
      const ring_distance = 4; // Reduced slightly to ensure 5+ rings fit in the 0-100 scale
      const particles = [];
      const center = 50; // Represents 50% (the center of the div)
      const manualOptions = {
        move: {
          enable: false,
          // keep them inside ~5px box around origin
          distance: {
            horizontal: 1,
            vertical: 1,
          },
          // or just "distance: 5" is also allowed
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "none", // they won't get near edges anyway
          },
          speed: 1, // how fast they roam *within* that box
        },
        collisions: {
          enable: false, // important to not push each other off-grid
        },
      };
      // 1. Add the center particle
      particles.push({ position: { x: center, y: center },
        options: manualOptions, });


      // 2. Generate each ring
      for (let i = 1; i <= count; i++) {
        // Define the 6 corners for ring 'i' based on your coordinate pattern
        const corners = [
          { x: center + ring_distance * i,     y: center + 2 * ring_distance * i }, // Top Right
          { x: center - ring_distance * i,     y: center + 2 * ring_distance * i }, // Top Left
          { x: center - 2 * ring_distance * i, y: center },                         // Mid Left
          { x: center - ring_distance * i,     y: center - 2 * ring_distance * i }, // Bottom Left
          { x: center + ring_distance * i,     y: center - 2 * ring_distance * i }, // Bottom Right
          { x: center + 2 * ring_distance * i, y: center }                          // Mid Right
        ];

        // 3. Connect corners to form the 6 sides of the hexagon
        for (let s = 0; s < 6; s++) {
          const start = corners[s];
          const end = corners[(s + 1) % 6]; // Connects the last corner back to the first

          // Add the corner point
          particles.push({ position: { x: start.x, y: start.y }, options: manualOptions,});

          // 4. Add middle segments (interpolation)
          // Each side of ring 'i' has 'i-1' points between the corners
          for (let j = 1; j < i; j++) {
            const fraction = j / i; // Progress along the side (e.g., 0.5 for the middle)
            const posX = start.x + (end.x - start.x) * fraction;
            const posY = start.y + (end.y - start.y) * fraction;
            
            particles.push({ position: { x: posX, y: posY }, options: manualOptions,});
          }
        }
      }
      return particles;
    };
    return {

// This ensures the particles fill the entire background
      manualParticles: generateBubbles(3),
      fullScreen: {
        enable: true,
      },
      particles: {
        move: {
        enable: false,
        speed: 1,           // The intensity of the shake
        straight: false,
        random: false,
        direction: "none",
        outModes: {
          default: "bounce",   // Crucial: stops them from drifting
        },
        vibrate: true,
  
      },

        
        collisions: {
          enable: false,
          mode: "bounce",
        },
        number: {
          value: 0, // Number of particles
        },
        color: {
          value: "#d5d5d5", // Particle color
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 1,
        },
        size: {
          value: { min: 9, max: 9 },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble", // Lines will 'grab' onto your mouse
          },
        },
        modes: {
          bubble: {
            distance: 100,
            size: 20, // Enlarged size on hover
            duration: 2,
            opacity: 1,
          },
        }, 
      },
      detectRetina: true,

    };
  }, []);

  const bubblesInit = useCallback((engine) => {
    //loadSlim(engine);
    loadSlim(engine); //slim is smaller but lacks some plugins like mouse trail
  }, []);

  return <Particles id="tsbubbles" init={bubblesInit} options={options} />;
};




