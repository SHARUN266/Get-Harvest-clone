const mongoose=require('mongoose');
const InvoiceSchema=new mongoose.Schema({
    client:{type:String,required:true},
    projectName:{type:String},
    clientdata:{type:String},
    company:{type:String},
    invoiceId:{type:String},
    issueDate:{type:String},
    dueDate:{type:String},
    decription:{type:String},
    service:{type:String},
    quantity:{type:Number},
    price:{type:Number},
    items:{type:Array},
    isPinned:{type:Boolean,default:false},
    isDuplicated:{type:Boolean,default:false},
    isArchieved:{type:Boolean,default:false}
})
const project=mongoose.model('invoice',InvoiceSchema);
module.exports=project;
