const express = require("express");
const app = express.Router();
const Time = require("./Time.model");


app.get("/", async (req, res) => {
  let p = await Time.find();
  res.send(p);y
});

app.post("/", async (req, res) => {
   let p = await Time.create(req.body);
   res.send(p);
 });

 app.patch("/:id", async (req, res) => {
   let { id } = req.params;
   let p = await Time.updateOne({ _id: id }, { $set: req.body });
   res.send(p);
 });

 app.delete("/:id", async (req, res) => {
  let { id } = req.params;
   try{
    
   let p = await Time.findByIdAndRemove(id);
   res.send(p);
   }
   catch{
    res.send(id)
   }
 });

// app.post('/create-pdf', (req,res)=>{
//     pdf.create(pdfTemplate(req.body),{}).toFile('Invoice.pdf',(err)=>{
//      if(err){
//         res.send(Promise.reject());
//      }else{
//         res.send(Promise.resolve()) ;
//      }
//     })
// })



// app.get("/search", async (req, res) => {
//  try {
//   let { q } = req.query;
//   let c = await Project.find({ client: q });
//   let p = await Project.find({ projectName: q });
//   if(c.length){
//       res.send(c);
//     }
//     else if(p.length){
//         res.send(p);
//   }
// }catch(e){
//   res.send(e.message);
// }
// });
// app.get("/:id", async (req, res) => {
//   let p = await Project.findById(req.params.id);
//   res.send(p);
// });







module.exports = app;
