// import
const db = require("../models/db")

// controllers
   // get
module.exports.main_get = (req, res) => {
    res.render("main");
}

   // post
module.exports.main_post = async (req, res) => {
    const { name } = req.body;

    try {
        const name = await db.create({ name });
        console.log(name);
        res.status(201).json({ name : name.name })
    } catch (err) {
        console.log(err);
        res.status(400).json({ err : err });
    }
}

   // 404
module.exports.error404 = (req, res) => {
   res.render('404');
}