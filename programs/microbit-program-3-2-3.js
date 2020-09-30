let on : boolean = true
let halfWay : boolean = false
let yARR:number[]=[1, 4, 0, 2, 3]
let xARR:number[]=[0, 3, 2, 4, 1]
input.onButtonPressed(Button.A, () => { halfWay = !halfWay })

basic.forever(function () {
    for (let x = 0; x <= 5; x ++) {
        for (let y = 0; y <= 5; y ++) {

            if (on) 
                led.plot(xARR[x], yARR[y])
            else
                led.unplot(xARR[x], yARR[y])
            basic.pause(50)
        }
    }
    on = !on
})

//I asked John on 9/29 in brake out group in two or three about this problem and it doent say to use randits because it's scrambled.
