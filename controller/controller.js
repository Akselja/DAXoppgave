// import
const db = require("../models/db")

// controllers
   // get
module.exports.main_get = (req, res) => {
    res.render("main");
}

   // post
module.exports.main_post = (req, res) => {
    
}

   // 404
module.exports.error404 = (req, res) => {
   res.render('404');
}