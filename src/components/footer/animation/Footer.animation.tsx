import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const FooterAnimation = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
     await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await container;
    }, []);


    return (
        <div className="animation relative w-full h-full">
            <Particles 
                id="tsparticles" 
                init={particlesInit} 
                loaded={particlesLoaded} 
                options = {{
                    fullScreen:false,
                    fps_limit:60,
                    particles: {
                        number: {
                            value: 65,
                            limit :80,
                            density: {
                                enable: true,
                                area: 800
                            }
                        },
                    
                        color: {
                            value: ["#0099ff", "#3087bf", "#0065a6", "#ff8e00", "#a65c00"]
                        },
                        shape: {
                            type: "square"
                        },
                        opacity: {
                            value: 1
                        },
                        size: {
                            value: { min: 1, max: 3 }
                        },
                        
                        links: {
                            enable: true,
                            distance: 80,
                            color: "#0099ff",
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: "none",
                            random: false,
                            straight: false,
                            outModes: "out"
                        }
                    },
                    
                    interactivity: {
                    events: {
                        onHover: {
                        enable: true,
                        mode: "grab"
                        },
                        onClick: {
                        enable: true,
                        mode: "push"
                        }
                    },
                    modes: {
                        grab: {
                        distance: 140,
                        links: {
                            opacity: 1
                        }
                        },
                        push: {
                        quantity: 4
                        }
                    }
                    }
                }}
            
            />
        </div>
    );
};

export default FooterAnimation