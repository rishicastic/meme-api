const mongoose = require ("mongoose");
 url = "mongodb+srv://rishiii:Saumya70@mycluster.m2tve.mongodb.net/memegenerator?retryWrites=true&w=majority"

 mongoose.connect(url)
 .then (() => {
     console.log ("database connected");
 })
 .catch  ( (err) => console.error (err));
 module.exports = mongoose ;