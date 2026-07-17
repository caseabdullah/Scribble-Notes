const app=require('./src/app');
const PORT=process.env.PORT || 3000;

require('dotenv').config();//env

const connect_db=require('./src/db/db')//database conncetion
connect_db()

app.listen(PORT,()=>{

    console.log(`Server Connected to Port ${PORT} Successfully.....`);

})