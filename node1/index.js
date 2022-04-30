
const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()              //deklarasi variabel express
const port = 8080                  //deklarasi port
 
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req, res) => {       // endpoint '/'
    res.send("Hello Programers!")  
})
 
app.get('/orang/:nama', (req,res)=>{
    var namaOrang = req.params.nama
    res.end('Menampilkan nama siswa:'+namaOrang)
})
/*
req.params pada endpoint get ini berfungsi untuk 
menangkap nilai yang dikirimkan melalui url yang mengirimkan nilai secara 
langsung tanpa key, misal "Localhost:8080/orang/rayz", maka output yang akan ditampilkan pada 
variabel namaOrang adalah 'rayz'
*/
 
app.post('/orang', (req, res)=>{
    var namaOrang = req.params.nama
    var alamat = req.body.alamat
    res.end('Menampilkan orang baru, atas nama: '+namaOrang+', yang beralamat di'+alamat)
})
 
app.delete('/orang/:id', (req, res) => {
    var id = req.params.id
    var namaOrang = req.body.nama
    res.end('ID'+id+' telah dihapus, atas nama '+namaOrang)
});
 
app.put('/orang/:id', (req, res) => {
    var id = req.params.id
    var namaOrang = req.body.nama
    var alamat = req.body.alamat
    res.end('Seseorang dengan ID'+id+', telah terupdate')
});
/**
 * Pada endpoint post, delete, dan put diatas, penggunaan req.body berfungsi untuk menangkap nilai yang dikirimkan melalui form-html (interface),
 * dan untuk bisa menggunakan req.body, kita harus memanggil library body-parser. 
 * body-parser adalah library untuk menangani application/x-www-form-urlencoded (data json yang dikirim melalui form-html/interface).
 * 
 * Dan untuk req.params yang ada pada endpoint put dan delete, memiliki fungsi yang sama seperti pada endpoint get
 */
 
app.listen(port, () => {            
    console.log(`Server di port ${port}`)
})
/*
Fungsi ini akan ditampilkan pada terminal untuk memberitahukan port mana yang akan digunakan dalam pengujian
*/
