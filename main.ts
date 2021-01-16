input.onButtonPressed(Button.A, function () {
    pauze += -100
})
input.onButtonPressed(Button.B, function () {
    pauze += 100
})
let bal = game.createSprite(2, 2)
let pauze = 0
let pauze2 = 100
basic.forever(function () {
    if (input.rotation(Rotation.Roll) > 10 && input.rotation(Rotation.Roll) < 90) {
        bal.change(LedSpriteProperty.X, 1)
        basic.pause(pauze)
    }
    if (input.rotation(Rotation.Roll) < -10 && input.rotation(Rotation.Roll) > -90) {
        bal.change(LedSpriteProperty.X, -1)
        basic.pause(pauze)
    }
    if (input.rotation(Rotation.Pitch) > 10 && input.rotation(Rotation.Pitch) < 90) {
        bal.change(LedSpriteProperty.Y, 1)
        basic.pause(pauze)
    }
    if (input.rotation(Rotation.Pitch) < -10 && input.rotation(Rotation.Pitch) > -90) {
        bal.change(LedSpriteProperty.Y, -1)
        basic.pause(pauze)
    }
    basic.pause(pauze2)
})
