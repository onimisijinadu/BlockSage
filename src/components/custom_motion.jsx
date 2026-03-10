export const fadedInOut = (delay = 0) =>({
        hidden: {opacity: 0, y: 50, scale: 0.96},
        show: {opacity: 1, y: 0, scale: 1, transition:{duration: 0.6, delay}}
})