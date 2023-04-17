const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
date:{
    type: Date,
},

captainName:{
    type: String,
},

weather:{
    type:String,
},

carryingGoods:Boolean,


breakages: Boolean
})




const Log = mongoose.model('Log', logSchema)
module.exports = Log