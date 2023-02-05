let Stappen = 0
input.onButtonPressed(Button.A, function () {
    Stappen = 0
    basic.showNumber(Stappen)
})
input.onGesture(Gesture.ThreeG, function () {
    Stappen += 1
    basic.showNumber(Stappen)
})
basic.forever(function () {
	
})
