const express = require("express");
const app = express.Router();
const Invoice = require("./Invoice.model");

app.get("/", async (req, res) => {
let p = await Invoice.find();
  res.send(p);

});

app.post("/", async (req, res) => {
   let p = await Invoice.create(req.body);
   res.send(p);
})
// app.post('/createPdf', (req,res)=>{
//    try{
//       pdf.create(pdfTemplate(req.body),{}).toFile('Invoice.pdf',(err)=>{
//          if(err){
//             res.send(Promise.reject());
//          }else{
//             res.send(Promise.resolve()) ;
//          }
//         })
//    } 
//    catch(err){
//       res.send(err)
//    }
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
