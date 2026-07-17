const express=require('express')
const {authDashboard}=require('../middlewares/tokenAuth.middleware')
const {createUserNote,deleteUserNote,updateUserNote,getUserNotes} =require('../controllers/dashboard.controller')

const router=express.Router()

router.post('/create',authDashboard,createUserNote);
router.delete('/delete/:index',authDashboard,deleteUserNote);
router.put('/update/:index',authDashboard,updateUserNote);
router.get('/allnotes',authDashboard,getUserNotes);
router.get("/dashboard", authDashboard, (req, res) => {
  res.status(200).json({
    message: "Authorized",
    user: req.user
  });
});

module.exports=router;