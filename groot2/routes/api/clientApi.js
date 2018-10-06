const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const PORT = 5000;

app.use(bodyParser.json());




app.get('/', (req,res,next)=>{
    res.status(200).send("OK");
    console.log('active');
})


app.get('/api/user', (req, res,next)=> {

})



app.listen(PORT, () => { console.log(`Listening on Port ${PORT}`)})