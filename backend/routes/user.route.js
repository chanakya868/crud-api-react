let mongoose = require('mongoose'),
express =require('express'),
router=express.Router();

const { UNSAFE_NavigationContext } = require('react-router-dom');
//student model
let userSchema = require('../models/user');
//create user
router.route('/create-student').post((req, res, next)=> {
    userSchema.create(req.body, (error, data)=>{
        if (error){
            return next(error)
        }else{
            console.log(data)
            res.json(data)
        }
    })
});
//read user
router.route('/').get((req,res)=>{
    userSchema.find((error,data)=>{
        if (error){
            return next(error)
        } else {
            res.json(data)
        }
    })
});
//get single user
router.route('/edit/:id').get((req, res)=>{
    userSchema.findById(req.params.id, (error, data)=> {
        if (error){
            return next(error)
        } else{
            res.json(data)
        }
    })
});

//update user
router.route('/update/:id').put((req, res, next) => {
    userSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('user updated successfully !')
      }
    })
  });

  // Delete user
router.route('/delete/:id').delete((req, res, next) => {
    userSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  
  module.exports = router;