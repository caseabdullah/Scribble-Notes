const mongoose=require('mongoose');

connect_db = async() =>{

    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database connected Successfully");

}

module.exports=connect_db;