const mysql = require('mysql');

let connection = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hackeru-project',
};

if (process.env.NODE_ENV !== 'development') {
    connection = {
        host: 'localhost',
        user: 'kimkcom_kimk_admin',
        password: 'arm@_a,lsB7b',
        database: 'kimkcom_data-base',
    };
}
const con = mysql.createConnection(connection);

con.connect((err) => {
    if (err) {
        throw err;
    }

    console.log('DB Connected');

});

exports.con = con;