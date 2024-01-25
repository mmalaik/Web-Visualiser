let express = require("express");
let path = require("path");

var app = express();

 app.get("/ArchitecturalModel", (req, res) => {
     res.sendFile(path.join(__dirname, "public/IFC-models/ArchitecturalModel.ifc"));
 });

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});
app.listen(3000, () => {
    console.log("listening to 3000")
})
