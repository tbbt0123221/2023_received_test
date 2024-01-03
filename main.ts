radio.onReceivedNumber(function (receivedNumber) {
    if (速度 == 25) {
        if (receivedNumber == 1) {
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
        } else if (receivedNumber == 2) {
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
        } else if (receivedNumber == 3) {
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
        } else if (receivedNumber == 4) {
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
        } else if (receivedNumber == 5) {
            basic.showLeds(`
                # # . . .
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            pins.servoWritePin(AnalogPin.P15, 180)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P15, 90)
        } else if (receivedNumber == 6) {
            basic.showLeds(`
                . . . # #
                . . . # #
                . . . . .
                . . . . .
                . . . . .
                `)
            pins.servoWritePin(AnalogPin.P16, 180)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P16, 90)
        } else if (receivedNumber == 7) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . # #
                . . . # #
                `)
            pins.servoWritePin(AnalogPin.P16, 0)
            basic.pause(1000)
            pins.servoWritePin(AnalogPin.P16, 90)
        } else if (receivedNumber == 8) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # . . .
                # # . . .
                `)
            pins.servoWritePin(AnalogPin.P15, 0)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P15, 90)
        } else if (receivedNumber == 9) {
            basic.showLeds(`
                # # . # #
                # # . # #
                . . . . .
                . . . . .
                . . . . .
                `)
            pins.servoWritePin(AnalogPin.P15, 180)
            pins.servoWritePin(AnalogPin.P16, 180)
            basic.pause(2000)
            pins.servoWritePin(AnalogPin.P16, 90)
            pins.servoWritePin(AnalogPin.P15, 90)
        } else if (receivedNumber == 10) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # . # #
                # # . # #
                `)
            pins.servoWritePin(AnalogPin.P15, 0)
            pins.servoWritePin(AnalogPin.P16, 0)
            basic.pause(2000)
            pins.servoWritePin(AnalogPin.P16, 90)
            pins.servoWritePin(AnalogPin.P15, 90)
        }
        basic.clearScreen()
    } else if (速度 == 0) {
        if (receivedNumber == 1) {
            motobit.enable(MotorPower.On)
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 10)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 10)
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            motobit.enable(MotorPower.Off)
        } else if (receivedNumber == 2) {
            motobit.enable(MotorPower.On)
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 10)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 0)
            basic.showLeds(`
                . # # # #
                . . . # #
                . . # . #
                . # . . #
                . # . . .
                `)
            motobit.enable(MotorPower.Off)
        } else if (receivedNumber == 3) {
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
        } else if (receivedNumber == 4) {
            motobit.enable(MotorPower.On)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 10)
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 0)
            basic.showLeds(`
                # # # # .
                # # . . .
                # . # . .
                # . . # .
                . . . # .
                `)
            motobit.enable(MotorPower.Off)
        } else if (receivedNumber == 5) {
            basic.showLeds(`
                # # . . .
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            pins.servoWritePin(AnalogPin.P15, 120)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P15, 90)
        } else if (receivedNumber == 6) {
            basic.showLeds(`
                . . . # #
                . . . # #
                . . . . .
                . . . . .
                . . . . .
                `)
            pins.servoWritePin(AnalogPin.P16, 120)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P16, 90)
        } else if (receivedNumber == 7) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . # #
                . . . # #
                `)
            pins.servoWritePin(AnalogPin.P16, 60)
            basic.pause(1000)
            pins.servoWritePin(AnalogPin.P16, 90)
        } else if (receivedNumber == 8) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # . . .
                # # . . .
                `)
            pins.servoWritePin(AnalogPin.P15, 60)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P15, 90)
        } else if (receivedNumber == 9) {
            basic.showLeds(`
                # # . # #
                # # . # #
                . . . . .
                . . . . .
                . . . . .
                `)
            pins.servoWritePin(AnalogPin.P15, 180)
            pins.servoWritePin(AnalogPin.P16, 180)
            basic.pause(2000)
            pins.servoWritePin(AnalogPin.P16, 90)
            pins.servoWritePin(AnalogPin.P15, 90)
        } else if (receivedNumber == 10) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # . # #
                # # . # #
                `)
            pins.servoWritePin(AnalogPin.P15, 0)
            pins.servoWritePin(AnalogPin.P16, 0)
            basic.pause(2000)
            pins.servoWritePin(AnalogPin.P16, 90)
            pins.servoWritePin(AnalogPin.P15, 90)
        }
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P16, 100)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P16, 90)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P16, 80)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P16, 90)
})
radio.onReceivedValue(function (name, value) {
    速度 = value
})
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
pins.servoWritePin(AnalogPin.P16, 90)
pins.servoWritePin(AnalogPin.P15, 90)
速度 = 0
radio.setGroup(11)
motobit.invert(Motor.Left, true)
motobit.invert(Motor.Right, false)
basic.showNumber(321)
