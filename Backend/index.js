require('dotenv').config();
const express=require("express");
const bodyParser= require("body-parser");
const projectRouter=require('./Projects/projects.router');
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
app.use('/projects',projectRouter);


app.listen(port,async ()=>{
    console.log("Your server is running")
    await mongoose.connect(process.env.DATABASE,{
        useNewUrlParser:true,
        useUnifiedTopology:true
     });
 });