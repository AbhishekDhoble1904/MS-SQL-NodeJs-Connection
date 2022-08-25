const sam = require('../models/Sample');
const config = require('../dbConnect/dbConfig');
const sql = require('mssql');

// var conn = new sq.ConnectionPool(dbConfig);
async function getSample(req, res, next) {
    try {
        
        let pool = await sql.connect(config);
        // console.log("HIIIIIIIIIIIII")
        let products = await pool.request().query("select * from sample");
        res.send(products.recordsets);
        // console.log("BYEEEEEEEEEEEE")
        // return console.log(products.recordsets); 

       
        
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {getSample};