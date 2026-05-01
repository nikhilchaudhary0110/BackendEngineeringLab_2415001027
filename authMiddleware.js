exports.isLoggedIn=(req,res,next)=>{
    if(!req.session.user){
        return res.send("Please login first");
    }
    next();
};

exports.isAdmin=(req,res,next)=>{
    if(req.session.user.role !=="admin"){
        return res.send("Access denied");

    }
    next();
};