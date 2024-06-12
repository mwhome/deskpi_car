function Werte_anzeigen () {
    OLED.writeStringNewLine("")
    OLED.writeStringNewLine("Abstand:  " + convertToText(Abstand) + " cm")
    OLED.writeStringNewLine("")
    OLED.writeStringNewLine("Grey L: " + convertToText(GreyL))
    OLED.writeStringNewLine("Grey R: " + convertToText(GreyR))
    OLED.writeStringNewLine("Lux L: " + convertToText(LuxL))
    OLED.writeStringNewLine("Lux R: " + convertToText(LuxR))
    OLED.writeStringNewLine("")
    OLED.clear()
}
function vorwärts (num: number) {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, num)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, num)
    LED1.showColor(neopixel.colors(NeoPixelColors.Green))
    LED2.showColor(neopixel.colors(NeoPixelColors.Green))
}
function Werte_auslesen () {
    GreyL = pins.analogReadPin(AnalogPin.P1)
    serial.writeValue("Grey_L: ", GreyL)
    GreyR = pins.analogReadPin(AnalogPin.P2)
    serial.writeValue("Grey_R: ", GreyR)
    LuxR = pins.analogReadPin(AnalogPin.P0)
    serial.writeValue("Lux_R: ", LuxR)
    LuxL = pins.analogReadPin(AnalogPin.P4)
    serial.writeValue("Lux_L: ", LuxL)
    Abstand = sonar.ping(
    DigitalPin.P12,
    DigitalPin.P9,
    PingUnit.Centimeters
    )
    serial.writeValue("Abstand: ", Abstand)
}
function links (num: number) {
    pins.analogWritePin(AnalogPin.P13, num)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, num)
    LED2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    LED3.showColor(neopixel.colors(NeoPixelColors.Yellow))
}
function Start () {
    led.enable(false)
    OLED.init(128, 64)
    strip = neopixel.create(DigitalPin.P6, 4, NeoPixelMode.RGB)
    LED1 = strip.range(0, 1)
    LED2 = strip.range(1, 1)
    LED3 = strip.range(2, 1)
    LED4 = strip.range(3, 1)
    LuxR = 0
    LuxL = 0
    GreyL = 0
    GreyR = 0
    Abstand = 0
    serial.redirectToUSB()
}
function rechts (num: number) {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, num)
    pins.analogWritePin(AnalogPin.P15, num)
    pins.analogWritePin(AnalogPin.P16, 0)
    LED1.showColor(neopixel.colors(NeoPixelColors.Yellow))
    LED4.showColor(neopixel.colors(NeoPixelColors.Yellow))
}
function linksKurve (num: number) {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, num)
    LED2.showColor(neopixel.colors(NeoPixelColors.Yellow))
}
function stopp () {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
}
function rückwärts (num: number) {
    pins.analogWritePin(AnalogPin.P13, num)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, num)
    pins.analogWritePin(AnalogPin.P16, 0)
    LED3.showColor(neopixel.colors(NeoPixelColors.Red))
    LED4.showColor(neopixel.colors(NeoPixelColors.Red))
}
function rechtsKurve (num: number) {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, num)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
    LED1.showColor(neopixel.colors(NeoPixelColors.Yellow))
}
let LED4: neopixel.Strip = null
let strip: neopixel.Strip = null
let LED3: neopixel.Strip = null
let LED2: neopixel.Strip = null
let LED1: neopixel.Strip = null
let LuxR = 0
let LuxL = 0
let GreyR = 0
let GreyL = 0
let Abstand = 0
Start()
basic.forever(function () {
    Werte_auslesen()
    Werte_anzeigen()
})
