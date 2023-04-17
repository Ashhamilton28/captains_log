require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const logs = require('./models/logs')
const Log = require('./models/Log')
const app = express();
const PORT = 3000

//====Configuration
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

//======Middleware
app.use((req, res, next) => {
    console.log(req.url)
    next()
})

//tells app to use these
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))


//Home page Route
app.get('/', (req, res)=>{
    res.send('<h1>Hello Captains log</h1>')
    // res.send(logs)
})

//New Route
app.get('/logs/new', (req, res)=>{
    res.render('New')
})

//!create route
app.get('/logs/create', (req, res)=>{
    res.send('received')
})

//Index Route
app.get('/logs/Index', (req, res)=> {
    Log.find({}, (error, allLogs)=>{
        res.render('Index', {logs: allLogs})
    })
})


//return the edits form 
app.get('/logs/:id/edit', (req, res)=>{
    Log.findById(req.params.id,(error, foundLog)=>{
        if (!error){
            res.render('Edit',{log: foundLog})
        }else{
            res.send({msg: error.message})
        }
    })
})



//handle the edit form data
app.put('/logs/:id', (req, res)=>{
    if(req.body.isCarryingGoods=== 'on'){
        req.body.isCarryingGoods = true
    }else{
        req.body.isCarryingGoods= false
    }
    Log.findByIdAndUpdate(req.params.id, req.body,{new:true},(error, updatedLog)=>{
        res.redirect(`/logs/${req.params.id}`)



        if(req.body.anyBreakages=== 'on'){
            req.body.anyBreakages = true
        }else{
            req.body.anyBreakages= false
        }
        Log.findByIdAndUpdate(req.params.id, req.body,{new:true},(error, updatedLog)=>{
            res.redirect(`/logs/${req.params.id}`)
        })
    })
})


//show route
app.get('/logs/:id', (req, res) => {
    console.log(req.params);
    Log.findById(req.params.id, (error, foundLog)=>{
        res.render('Show', {log: foundLog})
    })
})



//delete route
app.delete('/logs/:id', (req, res)=>{
    Log.findByIdAndRemove(req.params.id, (error, deletedLog)=>{
        res.redirect('/logs')
    })
})


//404 page
app.get('*', (req, res)=>{
    res.redirect('404')
})

// Tell the app to listen on port 3000
app.listen(3000, () => {
    console.log(`Server running on port: ${PORT}`);
    mongoose.set('strictQuery', true)
    // connect to mongodDB
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
})