const express=require("express");
const bodyParser= require("body-parser");

const cors =require("cors");
const mongoose=require('mongoose');
const InvoiceRouter=require('./InvoiceList/Invoice.router');
const TimeRouter=require('./TimeList/Time.router');

const app=express();

const port=process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/invoice',InvoiceRouter);
app.use('/time',TimeRouter);

// app.get('/fetchPdf',(req,res)=>{
   
//     try{
//         res.sendFile(`${__dirname}/Invoice.pdf`)
//     }catch(err){
//         res.send(err.message)
//     }
//  })

app.listen(port,async ()=>{
    await mongoose.connect('mongodb+srv://faizanghani2222:27102001@cluster0.i1i38gd.mongodb.net/test');
 });