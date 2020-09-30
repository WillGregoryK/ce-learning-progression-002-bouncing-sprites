let on : boolean = true
let halfWay : boolean = false

input.onButtonPressed(Button.A, () => { halfWay = !halfWay })

basic.forever(function () {
    for (let x = 0; x < 5; x ++) {
        for (let y = 0; y < 5; y ++) {
            if (halfWay)
                if (2 >= x)
                    break
            if (on) 
                led.plot(y, x)
            else
                led.unplot(y, x)
            basic.pause(50)}}
    on = !on})

