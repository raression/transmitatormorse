let cod_morse = ""
let numar_sertar = 0
let valoare_citita_tastatura = ""
let element_morse = ""
let litera = ""
serial.setRxBufferSize(100)
let litere = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z",
"0",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9"
]
let codurimorse = [
".-",
"-...",
"-.-.",
"-..",
".",
"..-.",
"--.",
"....",
"..",
".---",
"-.-",
".-..",
"--",
"-.",
"---",
".--.",
"--.-",
".-.",
"...",
"-",
"..-",
"...-",
".--",
"-..-",
"-.--",
"--..",
"-----",
".----",
"..---",
"...--",
"....-",
".....",
"-....",
"--...",
"---..",
"---."
]
basic.forever(function () {
    valoare_citita_tastatura = serial.readUntil(serial.delimiters(Delimiters.CarriageReturn))
    for (let litera2 of valoare_citita_tastatura) {
        basic.showString(litera2,-100)
if (litera2 == " ") {
            basic.pause(700)
            continue;
        } else {
            numar_sertar = litere.indexOf(litera2)
            if (numar_sertar == -1) {
                continue;
            }
            cod_morse = codurimorse[numar_sertar]
            for (let element_morse2 of cod_morse) {
                if (element_morse2 == ".") {
                    pins.digitalWritePin(DigitalPin.P2, 0)
                    basic.pause(100)
                    pins.digitalWritePin(DigitalPin.P2, 1)
                }
                if (element_morse2 == "-") {
                    pins.digitalWritePin(DigitalPin.P2, 0)
                    basic.pause(300)
                    pins.digitalWritePin(DigitalPin.P2, 1)
                }
                basic.pause(100)
            }
        }
        basic.pause(200)
    }
    basic.clearScreen()
})
