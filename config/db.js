const mongoose = require("mongoose");
const keys = require("./keys")
const connection = async () =>{
    try{
        const conn = await  mongoose.connect(keys.mongoDb.MONGO_URI);
        console.log(`connceted to the ${conn.connection.host}`)

    }catch(err){
        console.log(err)
    }
}

module.exports = connection