const 
{createPool
} = require('mysql');

const db = createPool ({
    host:'localhost',
    user: 'root',
    password:'',
    database:'ecom',
    connectionLimit:''
})

db.query('select * from products', (err,result,fields ) => {
    if(err){
        return console.log(err)
    }return console.log(result)
})