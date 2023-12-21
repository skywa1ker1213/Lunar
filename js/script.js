
        const tl = gsap.timeline ({
        scrollTrigger: {
        scrub: 1,
        trigger: ".nav__logo",
        start: "50% 50%",
        endTrigger: ".main__img2",
        end: "bottom 50%"
            },
            }    
            )


                const fadeOpen = gsap.timeline({ defaults: { duration: .5  } })
                .from(".main__btn", { opacity: 0, y: 100, x: 120,rotateX: 360,rotateY: 360 })
                .from(".block__1", { opacity: 0, y: 10, x: 360, rotateX: 99, rotateY: 99 })