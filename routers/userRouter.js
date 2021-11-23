const Model = require ('../models/userModel');

const router = require ('express').Router();

router.post('/add',(req,res)=>{

    console.log("add request in user router");
    console.log(req.body);
    // new Model(req.body).save()
    // .then (data => console.log ('user data added '))
    // .catch ( err => console.error(err))

    //promise method
    new Model(req.body).save()
    .then( ()=> {
        console.log('user data saved');
        res.status(200).json( { message:'success'});
    })
    .catch( (err)=> {
        console.error(err);
        res.status(500).json(err);
    })
})


router.post('/login',(req,res)=>{

    let user_data = req.body;
    console.log(user_data);
    //promise method
    Model.findOne({email : user_data.email.trim()})
    .then( (data)=> {
        if(data){
            if(data.password == user_data.password.trim()){
                console.log('success');
                res.status(200).json( { message:'login success'});
            }else{
                console.log('password incorrect');
                res.status(300).json( { message:'password incorrect'});
            }
        }else{
            console.log('email not found');
            res.status(300).json( { message:'email not found'});
        }
    })
    .catch( (err)=> {
        console.error(err);
        res.status(500).json(err);
    })
})
module.exports = router;