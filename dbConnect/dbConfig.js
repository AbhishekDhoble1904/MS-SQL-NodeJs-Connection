const sql = require('mssql');

const config = {
    user :'sa',
    password :'Password',
    server:'serverName', //add your server name 
    database:'sample_db',
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        trustServerCertificate: true
        // instancename :''
    },
    port : 1433,
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
}

module.exports = config;



