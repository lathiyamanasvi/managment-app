let express = require("express")
let port =5000
let app = express()


app.get("/",(req,res)=>{
    return res.send("<h1>hello world></h1>")
})

app.listen(port,(err)=>{
    if (err) {
        console.log("server is error",port);    
    }
    console.log("server is start",port);
})