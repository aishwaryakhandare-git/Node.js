const express = require("express")
const customerRoute = require("./routes/customerRoute")

const app = express();
app.use(express.json());

app.post("/customers",(req,res)=>{
    console.log(req.body)
    res.send("Customer received")
});

app.get("/",(req,res)=>{
    res.send("CRM Backend Running")
});

app.listen(3000, () =>{
    console.log("Server running on port 3000")
})