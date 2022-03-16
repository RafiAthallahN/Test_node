const mysql = require("mysql")

//Koneksi
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tes_penduduk"
}) 

module.exports = db;