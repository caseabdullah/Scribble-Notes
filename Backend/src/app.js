const express=require('express');
const cookieParser=require('cookie-parser')
const userauth=require('./routes/auth.route')
const dashboard=require('./routes/dashboard.route')
const cors=require('cors')

const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"https://scribblenotes.netlify.app",
    credentials:true
}));

app.use('/auth',userauth);
app.use('/',dashboard);

module.exports=app;