const express=require('express');
const session=require('express-session');
const cookieParser=require('cookie-parser');
const authRoutes=require("./routes/authRoutes");
const app=express();

app.use(express.json());
app.use(cookieParser());

app.use(session({
    secret:"secret",
    resave:false,
    saveUninitialized:true
}));

app.use("/",authRoutes);
app.listen(3000, ()=>console.log("Server running"));
