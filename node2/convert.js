//inisialisasi express
const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//endpoint
app.get("/", (req, res) => {
    res.send("Program Konversi Bilangan")
})

//endpoint convert decimal
app.get("/convert/decimal/:decimal", (req, res) => {
    let d = req.params.decimal

    let b = Number(d).toString(2)
    let o = Number(d).toString(8)
    let h = Number(d).toString(16)

    res.send({
        decimal: d,
        result: {
            biner: b,
            oktal: o,
            hexadecimal: h,
        }

    })
})

//endpoint convert biner
app.get("/convert/biner/:biner", (req, res) => {
    let b = req.params.biner

    let d = parseInt(b, 2)
    let o = d.toString(8)
    let h = d.toString(16)

    res.send({
        biner: b,
        result: {
            decimal: d,
            oktal: o,
            hexadecimal: h,
        }

    })

})

//endpoint convert oktal
app.get("/convert/oktal/:oktal", (req, res) => {
    let o = req.params.oktal

    let d = parseInt(o, 8)
    let b = d.toString(2)
    let h = d.toString(16)

    res.send({
        oktal: o,
        result: {
            decimal: d,
            biner: b,
            hexadecimal: h,
        }

    })

})

//endpoint convert hexadecimal
app.get("/convert/hexadecimal/:hexadecimal", (req, res) => {
    let h = req.params.hexadecimal

    let d = parseInt(h, 16)
    let b = d.toString(2)
    let o = d.toString(8)

    res.send({
        hexadecimal: h,
        result: {
            decimal: d,
            biner: b,
            oktal: o,
        }

    })
})

//port
const port = 0906
app.listen(port, () => console.log(`port ${port}`))