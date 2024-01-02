function right () {
    motobit.enable(MotorPower.On)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 25)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 25)
    basic.showLeds(`
        . # # # #
        . . . # #
        . . # . #
        . # . . #
        . # . . .
        `)
    basic.pause(500)
    motobit.enable(MotorPower.Off)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (速度 == 0) {
            motobit.enable(MotorPower.On)
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            motobit.enable(MotorPower.Off)
        } else {
            motobit.enable(MotorPower.On)
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 20)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 20)
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            motobit.enable(MotorPower.Off)
        }
    } else if (receivedNumber == 2) {
        if (速度 == 0) {
            motobit.enable(MotorPower.On)
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 10)
            basic.showLeds(`
                . # # # #
                . . . # #
                . . # . #
                . # . . #
                . # . . .
                `)
            motobit.enable(MotorPower.Off)
        } else {
            motobit.enable(MotorPower.On)
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 30)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 5)
            basic.showLeds(`
                . # # # #
                . . . # #
                . . # . #
                . # . . #
                . # . . .
                `)
            motobit.enable(MotorPower.Off)
        }
    } else if (receivedNumber == 3) {
        if (速度 == 0) {
            motobit.enable(MotorPower.On)
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 50)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 50)
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            motobit.enable(MotorPower.Off)
        } else {
            motobit.enable(MotorPower.On)
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 10)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 10)
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            motobit.enable(MotorPower.Off)
        }
    } else if (receivedNumber == 4) {
        if (速度 == 0) {
            motobit.enable(MotorPower.On)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 10)
            basic.showLeds(`
                # # # # .
                # # . . .
                # . # . .
                # . . # .
                . . . # .
                `)
            motobit.enable(MotorPower.Off)
        } else {
            motobit.enable(MotorPower.On)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 30)
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 5)
            basic.showLeds(`
                # # # # .
                # # . . .
                # . # . .
                # . . # .
                . . . # .
                `)
            motobit.enable(MotorPower.Off)
        }
    } else if (receivedNumber == 5) {
        basic.showLeds(`
            . . . . .
            . . . # .
            # # # # #
            . # # # .
            . # . # .
            `)
        basic.pause(500)
    } else if (receivedNumber == 9) {
        basic.showLeds(`
            # # # # #
            # # . # #
            # . # . #
            # # . # #
            # # # # #
            `)
        _9()
    } else if (receivedNumber == 10) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        _10()
    } else if (receivedNumber == 6) {
        if (速度 == 0) {
            速度 = 1
        } else {
            速度 = 0
        }
    }
    basic.clearScreen()
})
function back () {
    motobit.enable(MotorPower.On)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 100)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 100)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.pause(500)
    motobit.enable(MotorPower.Off)
}
function left () {
    motobit.enable(MotorPower.On)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 25)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 25)
    basic.showLeds(`
        # # # # .
        # # . . .
        # . # . .
        # . . # .
        . . . # .
        `)
    basic.pause(500)
    motobit.enable(MotorPower.Off)
}
input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P16, 100)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P16, 90)
})
function forwardtyuu () {
    motobit.enable(MotorPower.On)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 60)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 60)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    motobit.enable(MotorPower.Off)
}
function forwardfast () {
    motobit.enable(MotorPower.On)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 100)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 100)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . # # # .
        `)
    basic.pause(500)
    motobit.enable(MotorPower.Off)
}
function left2 () {
    motobit.enable(MotorPower.On)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 50)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 100)
    basic.showLeds(`
        # # # # .
        # # . . .
        # . # . .
        # . . # .
        . . . # .
        `)
    basic.pause(500)
    motobit.enable(MotorPower.Off)
}
function _9 () {
    forwardfast()
    forward()
    right()
    forwardtyuu()
    left()
    forwardfast()
    forward()
    left()
    forwardtyuu()
    forward()
    forwardtyuu()
    right()
    forwardfast()
    forward()
    forwardtyuu()
}
function _11 () {
    forwardfast()
    right()
    forwardtyuu()
    left2()
    forwardfast()
    left2()
    forwardtyuu()
    right()
    forwardfast()
}
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P16, 80)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P16, 90)
})
function forward () {
    motobit.enable(MotorPower.On)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 25)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 20)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    motobit.enable(MotorPower.Off)
}
function _10 () {
    for (let index = 0; index < 3; index++) {
        forwardtyuu()
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P15, 180)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P15, 20)
        basic.pause(500)
    }
}
function right2 () {
    motobit.enable(MotorPower.On)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 100)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 50)
    basic.showLeds(`
        . # # # #
        . . . # #
        . . # . #
        . # . . #
        . # . . .
        `)
    basic.pause(500)
    motobit.enable(MotorPower.Off)
}
let 速度 = 0
速度 = 0
pins.servoWritePin(AnalogPin.P16, 90)
pins.servoWritePin(AnalogPin.P15, 90)
radio.setGroup(11)
motobit.invert(Motor.Left, true)
motobit.invert(Motor.Right, false)
basic.showNumber(321)
