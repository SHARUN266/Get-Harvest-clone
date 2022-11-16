const express = require("express");
const app = express.Router();
const Project = require("./projects.model");
app.get("/", async (req, res) => {
  let p = await Project.find();
  res.send(p);
});
app.get("/search", async (req, res) => {
 try {
  let { q } = req.query;
  let c = await Project.find({ client: q });
  let p = await Project.find({ projectName: q });
  if(c.length){
      res.send(c);
    }
    else if(p.length){
        res.send(p);
  }
}catch(e){
  res.send(e.message);
}
});
app.get("/:id", async (req, res) => {
  let p = await Project.findById(req.params.id);
  res.send(p);
});

app.post("/", async (req, res) => {
  let p = await Project.create(req.body);
  res.send(p);
});
app.patch("/:id", async (req, res) => {
  let { id } = req.params;
  let p = await Project.updateOne({ _id: id }, { $set: req.body });
  res.send(p);
});
app.delete("/:id", async (req, res) => {
  let { id } = req.params;
  let p = await Project.findByIdAndRemove(id);
  res.send(p);
});
module.exports = app;
