//inisialisasi express js
const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//endpoint
app.get("/", (req, res) => {
    res.send("Program Konversi Suhu")
})

//endpoint celcius
app.get("/convert/celcius/:celcius", (req, res) => {
    let c = req.params.celcius

    let r = (c * 4) / 5;
    let f = (c * 9) / 5 + 32;
    let k = c * 1 + 273.15;
    res.send({
        celcius: c,
        result: {
            reamur: r,
            fahrenheit: f,
            kelvin: k,
        }
    })
})

//endpoint reamur 
app.get("/convert/reamur/:reamur", (req, res) => {
    let r = req.params.reamur

    let c = r / 0.8
    let f = (r * 2.25) + 32
    let k = (r / 0.8) + 273.15

    res.send({
        reamur: r,
        result: {
            celcius: c,
            fahrenheit: f,
            kelvin: k,
        }
    })
})

//endpoint  Kelvin 
app.get("/convert/kelvin/:kelvin", (req, res) => {
    let k = req.params.kelvin

    let c = k * 1 - 273.15
    let f = k * 1.8 - 459.67
    let r = 0.8 * (k * 1 - 273)


    res.send({
        kelvin: k,
        result: {
            celcius: c,
            fahrenheit: f,
            reamur: r,
        }
    })
})
//endpoint Fahrenheit
app.get("/convert/fahrenheit/:fahrenheit", (req, res) => {
    let f = req.params.fahrenheit

    let c = (f * 1 - 32) / 1.8
    let r = (f - 32) / 2.25
    let k = (f * 1 + 459.67) / 1.8

    res.send({
        fahrenheit: f,
        result: {
            celcius: c,
            reamur: r,
            kelvin: k,
        }
    })
})

//port 
const port = 6996;
app.listen(port, () => console.log(`port ${port}`))