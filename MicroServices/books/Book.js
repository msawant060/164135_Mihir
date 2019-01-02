const mongoose=require("mongoose");

mongoose.model("Books",{

    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    numberpages:{
        type:String,
        require:true
    },
    publisher:{
        type:String,
        require:true
    }
});