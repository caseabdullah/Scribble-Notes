const app=require('./src/app');

require('dotenv').config();//env

const connect_db=require('./src/db/db')//database conncetion
connect_db()

app.listen(3000,()=>{

    console.log("Server Connectd to Port 3000 Successfully.....");

})