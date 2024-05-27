let Num1 = 0
let Num2 = 0
input.onButtonPressed(Button.A, function () {
    Num1 = randint(10, 20)
    basic.showNumber(Num1)
})
input.onButtonPressed(Button.B, function () {
    Num2 = randint(20, 40)
    basic.showNumber(Num2)
})
