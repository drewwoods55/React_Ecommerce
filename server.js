const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ecom'
});

db.connect(err => {
    if(err) {
        return err;
    } else {
        console.log("db connection successful!")
    }
});

app.use(cors());
app.use(express.json());
app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (err, result) => {
        if (err) {
            console.log(err)
        }else {
            res.json(result);
            console.log(result)
        }
    })
});
app.listen(3001, () => {
    console.log('running on port 3001');
});