const express = require("express")
const app = express();
const bodyParser = require("body-parser")

const mongoose = require("mongoose")


//middlewares
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")

mongoose.connect("mongodb://localhost:27017/KeeperDB")
//create a schema

const listschema =new mongoose.schema({
    item : {
        required : true,
        type : string
    }
})

//create a model (collection)

const items = new mongoose.model("items",listschema)

//routes
app.get("/",(req,res)=>{
    res.render("home",{app.get("/", (req, res) => {
        Items.find({}, (err, foundItems) => {
            if (err) {
                console.log(err);
            } else {
                res.render("list", {
                    items: foundItems,
                    date: new Date().toLocaleDateString()
                })
            }
        })
    })
    
    //     title : "Keeper",
    //    items : allItems,
    //    year:new Date().getFullYear()
    // })
})


// handling form submission in post
app.post("/",(req,res)=>{
    var item = req.body;
    
    const items : new items
})


//server
app.listen(3000,()=>{
    console.log("server started on port : 3000");
})