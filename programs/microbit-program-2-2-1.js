basic.forever(function () {
    for (let x = 0; x < 5; x ++) {
        for (let y = 0; y < 5; y ++) {
            if (on) 
                led.plot(y, x)
            else
                led.unplot(y, x)
            basic.pause(50)
        }
    }
    on = !on
})
