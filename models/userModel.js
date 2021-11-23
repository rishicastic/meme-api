const mongoose = require ('../connection');
 const schema = new mongoose.Schema ({
     username : String ,
     email : String,
     password : String,
     created: {type: Date, default: new Date() }
    //  meme : {type : mongoose.Types.ObjectId, ref: 'memes'}
 })
 const model = mongoose.model('users', schema);
 module.exports = model;