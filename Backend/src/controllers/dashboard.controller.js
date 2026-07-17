const notesModel=require('../models/userNotes.model');
const userModel=require('../models/user.model');

createUserNote = async(req,res)=>{

    try{
        const {title,description}=req.body;
        const userid=req.user.id;

        let user_notes=await notesModel.findOne({username:userid});

        if(!user_notes){
            user_notes=await notesModel.create({
                username:userid,
                notes:[]
            })
        }

        user_notes.notes.push({
            title,description
        })

        await user_notes.save();

        res.status(201).json({
            message: "Note added successfully",
            notes: user_notes,
        });
    }
    catch(err){
        res.status(500).json({
            message: err.message,
        });
    }

}

deleteUserNote = async(req,res)=>{
    
    const {index}=req.params;
    const userid=req.user.id;

    try{
        let user_notes=await notesModel.findOne({username:userid});
        if(!user_notes){
           return res.status(404).json({mssg:"Note dont exist"});
        }

        user_notes.notes.splice(index,1);

        await user_notes.save();

        res.status(200).json({
            message: "Note deleted successfully",
            notes:user_notes
        });
        }
    catch(err){
       return res.status(500).json({
            message: err.message,
        });
        }
}

updateUserNote =async(req,res)=>{

    const {index}=req.params;
    let {title,description}=req.body
    const userid=req.user.id;
    
    try{
        let user_notes=await notesModel.findOne({username:userid});
        if(!user_notes){
        return res.status(404).json({mssg:"Note dont exist"});
        }

        user_notes.notes[index]={
            title:title,
            description:description
        }

        await user_notes.save();

        return res.status(200).json({
            message: "Note update successfully",
            notes:user_notes
        });
    }
    catch(err)
    {
       return res.status(500).json({
            message: err.message,
            notes:user_notes
        });
    }

}

getUserNotes = async(req,res)=>{

    const userid=req.user.id;
    let user_notes=await notesModel.findOne({username:userid}).populate("username")

    if(!user_notes){
        return res.status(200).json({
            message:"No notes found",
            notes:{
                username: await userModel.findById(userid),
                notes:[]
            }
        });
    }

    return res.status(200).json({
        message: "All Notes fetched successfully",
        notes:user_notes
    });


}
module.exports={createUserNote, deleteUserNote, updateUserNote, getUserNotes}