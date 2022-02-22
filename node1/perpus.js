//inisialisasi aplikasi menggunakan express js
const express = require("express")
const cors =  require("cors")
const mysql = require("mysql")
const { resp } = require("express")

const app = express()

//implementasi
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

//koneksi
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "perpus"
})

db.connect(error =>{
    if(error){
        console.log(error.message)
    }else{
        console.log("mysql connected")
    }
})

//data dummy
let nextId = 4;
const books =[
    { id: 1, title: "The First", year: 2019},
    { id: 2, title: "The Seccond", year: 2020},
    { id: 3, title: "The Third", year: 2021},
];

//ENDPOINT

app.get("/", (req,res) => {
    res.send({
        message: "Berhasil melakukan pemanggilan get",
        data: {
            description:
            "Endpoint ini untuk menampilkan data",
        }
    })
})

app.get("/books", (req,res) => {
    //deklarasi sql query
    let sql = "select * from perpus"

    //run query
    db.query(sql, (error, result)=> {
        let resp = null
        if(error){
            resp = {
                message: error.message
            }
        }else{
            resp = {
                result
            }
        }
        res.json(resp)
    })
})

//dhev's version
app.post("/books/tambah", (req,res) => {
    let judul = req.body.title
    let tahun = req.body.year

    //create sql query
    let sql = `insert into perpus (title, year) values ('${judul}','${tahun}')`

    //run query
    db.query(sql, (Error,result) =>{
        let response = null
        if(Error){
            response = {
                message: Error.message
            }
        }else{
            response = {
                message: "Berhasil menambahkan buku",
                title: judul,
                year: tahun,
            }
        }
        res.json(response)
    })
})
/*Errisa's version
app.post("/books", (req,res) => {
    //deklarasi variabel untuk inputan user
    var tambah_book = {
        title: req.body.title,
        year: req.body.year
    }
    //insert data buku ke database nya 
    // SET = VALUES
    db.query('INSERT INTO perpustakaan SET ?', tambah_book, (error, result) => {
        let response = null
        if(error){
            response = {
                message: error.message
            }
        }else{
            res.send("Berhasil menambahkan buku berjudul " + tambah_book.title + " dengan tahun terbit " +tambah_book.year)
            console.log("Berhasil menambahkan buku", result)
        }
    })

})
*/

app.put("/books/:id", (req,res) => { 
    let judul = req.body.title
    let tahun = req.body.year
    let id = req.params.id

    //create sql query
    let sql = `update perpus set title = ${judul} where id = ${id} `

    //run query
    db.query(sql, (Error,result) =>{
        let response = null
        if(Error){
            response = {
                message: Error.message
            }
        }else{
            response = {
                message: "Berhasil mengubah buku",
                title: judul,
                year: tahun,
            }
        }
        res.json(response)
    })
    /*
    const bookIndex = books.findIndex((item) => item.id == req.params.id);
    books[bookIndex].title = req.body.title;
    books[bookIndex].year = req.body.year;

    res.send({
        message: "berhasil mengubah buku",
        data: { book: books[bookIndex] },
    })
    */
})

app.delete("/books/:id", (req,res) => {

    /*
    const id = req.params.id;
    const index = books.findIndex(book => book.id == id);
    const book = books[index];
    if(book == undefined){
        res.send({
            message: "Buku tidak ditemukan"
        })
    } else {
        books.splice(index, 1);
        res.send({
            message: "Berhasil menghapus buku",
            data: {
                book,
                totalBooks: books.length,
            }
        })
    }
    */
})

const port = 8000;
app.listen(port, () => console.log (`App running ${port}`))