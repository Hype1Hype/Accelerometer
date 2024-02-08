enum RadioMessage {
    message1 = 49434,
    Arrow = 10071
}
radio.onReceivedMessage(RadioMessage.Arrow, function () {
    Direction2 = randint(1, 4)
    if (Direction2 == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        radio.sendMessage(RadioMessage.message1)
    }
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        basic.pause(50)
        Reaction_Timer += 1
    }
})
let Total_Time = 0
let Reaction_Timer = 0
let Direction2 = 0
radio.sendMessage(RadioMessage.Arrow)
loops.everyInterval(1000, function () {
    Total_Time += 1
})
