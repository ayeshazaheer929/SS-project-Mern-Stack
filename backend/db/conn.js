const mongoose = require('mongoose')
const DB = 'mongodb://ayeshazaheer929:9WLsQ6NH7t2MXNdL@ac-ss4lvrc-shard-00-00.mcbkzyn.mongodb.net:27017,ac-ss4lvrc-shard-00-01.mcbkzyn.mongodb.net:27017,ac-ss4lvrc-shard-00-02.mcbkzyn.mongodb.net:27017/sehatSakoon?ssl=true&replicaSet=atlas-10c77l-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(DB).then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log(err)
})
