const options = {
    fullScreen: {
      enable: true
    },
    themes: [
      {
        name: "light",
        default: {
          value: true,
          mode: "light"
        },
        options: {
          background: {
            color: "#ffffff"
          },
          particles: {
            color: {
              value: ["#6610f2", "#007bff", "#6f42c1"]
            }
          }
        }
      },
      {
        name: "dark",
        default: {
          value: true,
          mode: "dark"
        },
        options: {
          background: {
            color: "#ffffff"
          },
          particles: {
            color: {
              value: ["#6610f2", "#007bff", "#6f42c1"]
            }
          }
        }
      }
    ],
    fpsLimit: 60,
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      },
      shape: {
        type: ["circle", "square", "triangle"]
      },
      opacity: {
        value: 0.7
      },
      size: {
        value: 3,
        random: {
          enable: true,
          minimumValue: 5
        }
      },
      rotate: {
        value: 0,
        direction: "random",
        animation: {
          speed: 5,
          enable: true
        }
      },
      move: {
        enable: true,
        speed: 0.25,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      }
    },
    detectRetina: true
  };
  
  export default options;
  