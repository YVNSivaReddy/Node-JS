console.log("hello")
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))

//Define Path for Express Config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')

//set up static directory to serve
app.use(express.static(publicDirectoryPath))

//set up handle bars engines and view location
app.set('view engine','hbs')
app.set('views',viewsPath)

const partialsPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsPath)


app.get('',(req,res)=>{
    res.render('index',{
        title:'weather app',
        name:"siva"
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name:'Andrew'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help page',
        name:'Help'
    })
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
       return  res.send("Please provide search query")
    }
    res.send({
        products:[]
    })
})


// app.get('/details',(req,res)=>{
//     //JSON  is an array of objects
//     res.send({
//         name:'andrew',
//         age:27,
//         color:'white'
//     })
    
// })
app.listen(3000,()=>{
    console.log('server started on port 3000')
})