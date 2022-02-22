'use strict'

const db = require('../db')

module.exports ={
    index: (req, res) => {
        const sql = `SELECT * FROM penduduk`
        db.query(sql, (err,result)=>{
            if (err) throw (err)
            res.json({
                message: "berhasil",
                data: result
            })
        })
    },
    add: (req, res) => {
        let data = {
            nama: req.body.nama,
            alamat: req.body.alamat
        }
        let sql = "insert into penduduk SET ?";
        if(data.alamat && data.nama){
            db.query(sql, data, (err) => {
                if (err){
                    throw err
                }else{
                    res.json({
                        message: "Added succes",
                        data
                    })
                }
            })
        }
    },
    put: (req, res) => {
        let id = req.params.id;
        
        let updateData = {
            nama: req.body.nama,
            alamat: req.body.alamat
        }

        const sql = `UPDATE penduduk SET ? WHERE id = ?`;
        db.query(sql, [updateData, id], (err, result) => {
            if(err){
                throw err
            }else{
                res.json({
                    message: `Successfully update data where id = ${id}`,
                    nama: updateData.nama,
                    alamat: updateData.alamat
                })
            }
        })
    },
    delete: (req, res) => {
        let id = req.params.id;

        let dataDeleted;

        if(id){
            let sql = `SELECT * FROM penduduk WHERE id = ?`
            db.query(sql, id, (err,result) => {
                if(err){
                    throw err
                }else{
                    dataDeleted = result
                }
            })
        }
        if(id){
            let sql = `DELETE FROM penduduk WHERE id = ?`;
            db.query(sql, id, (err,result) => {
                if(err){
                    throw err
                }else{
                    res.json({
                        message: `Successfully delete ID = ${id}`,
                        deleted: dataDeleted
                    })
                }
            })
        }
    }
}