const express=require("express");
const app=express();
const bodyParser=require("body-parser");

app.use(bodyParser.json());//to send data in json format from body

// load mongoose
const mongoose=require("mongoose");
require("./Book")
const Book=mongoose.model("Books")
//connect
mongoose.connect("mongodb://localhost/bookservice",{ useNewUrlParser: true },()=>{
    console.log("mongoose connected");
});

app.get('/', function(req,res)
{
     res.send("this is book store");
})

app.post("/book", (req,res)=>{
  //   console.log(req.body);//to send data from postman in json format and 
    //print in console
   var newBook = {
       title: req.body.title,
       author: req.body.author,
       numberPages: req.body.numberPages,
       publisher: req.body.publisher
   }
   // create newBook object
    var book=new Book(newBook)
    book.save().then(()=>{ 
        console.log("New book created");
    }).catch((err)=>{
        if(err){
            throw err;
        }
    })
     res.send("A new book created");
})
app.listen(4545, () =>{
    console.log("up and running");
})