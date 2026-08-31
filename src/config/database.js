const mongoose=require("mongoose")

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Server is connected to Database")
    })
    .catch(err=>{
        console.log("Erro connecting to DB")
        process.exit(1)
    })
}

module.exports = connectToDB