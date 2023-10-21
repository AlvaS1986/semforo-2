let definir_estado = 0
basic.forever(function () {
    definir_estado = pins.digitalReadPin(DigitalPin.P2)
    if (definir_estado == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
