    const mongoose=require('mongoose');
let date=new Date()
let day=date.getDay()
const TimeSchema=new mongoose.Schema({
    project:{type:String,required:true},
    type:{type:String,default:"design"},
    time:{type:Number,default:0},
    day:{type:Number,default:day},
    notes:{type:String},
    isPinned:{type:Boolean,default:false},
    isDuplicated:{type:Boolean,default:false},
    isArchieved:{type:Boolean,default:false}
})
const time=mongoose.model('time',TimeSchema);
module.exports=time;
