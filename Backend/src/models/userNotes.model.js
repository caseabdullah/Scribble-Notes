const mongoose=require('mongoose');

const notesSchema =mongoose.Schema({
    username:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    notes:[
        {
            title:String,
            description:String,
        }
    ]
})

const notesModel=mongoose.model("notes",notesSchema);

module.exports=notesModel