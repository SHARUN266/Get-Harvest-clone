const mongoose=require('mongoose');
const projectsSchema=new mongoose.Schema({
        client:{type:String,required:true},
        projectName:{type:String,required:true},
        projectCode:{type:String},
        s_Date:{type:String},
        e_Date:{type:String},
        notes:{type:String},
        permission:{type:String},
        task:{type:Array},
        isPinned:{type:Boolean,default:false},
        isDuplicated:{type:Boolean,default:false},
        isArchieved:{type:Boolean,default:false}
})
const project=mongoose.model('project',projectsSchema);
module.exports=project;
