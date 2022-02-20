const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let userSchema = new Schema(
    {
        name:{
            type: String
        },
        email:{
            type:String
        },
        Rollno: {
            type: Number
        }
    },{
        collection:'user'
    }
)

module.exports = mongoose.model('user',userSchema)