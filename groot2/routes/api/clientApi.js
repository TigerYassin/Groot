const express = require('express');
const bodyParser = require('body-parser')
const hashFunction = require('password-hash')

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

//creating fake data to later replace with data from database
var customers = [{
    'name' : 'Yassin',
    'username' : 'yalsahlani1',
    'password' : hashFunction.generate('pass123'), 
    'email' : 'yalsahlani3@gatech.edu',
    'phone number' : '6787073386',
    'Items Bought' : null,
    'Cart' : null,
    'QR-Code' : null,
    'locations of stores to pickup from' :  null
}, {
    'name' : 'Ahmed',
    'username' : 'ahmed1',
    'password' : hashFunction.generate('gedi222'), 
    'email' : 'agedi@gatech.edu',
    'phone number' : '4043223343',
    'Items Bought' : null,
    'Cart' : null,
    'QR-Code' : null,
    'locations of stores to pickup from' :  null
}, {
    'name' : 'Samira',
    'username' : 'Sami',
    'password' : hashFunction.generate('samssi'), 
    'email' : 'sali54@student.gsu.edu',
    'phone number' : '3345562233',
    'Items Bought' : null,
    'Cart' : null,
    'QR-Code' : null,
    'locations of stores to pickup from' :  null
}, {
    'name' : 'Basuamlk',
    'username' : 'basu',
    'password' : hashFunction.generate('boosss'), 
    'email' : 'bwald@gsu.edu',
    'phone number' : '3456765433',
    'Items Bought' : null,
    'Cart' : null,
    'QR-Code' : null,
    'locations of stores to pickup from' :  null
}, {
    'name' : 'Ammanuel',
    'username' : 'amman',
    'password' : hashFunction.generate('geek'), 
    'email' : 'amman@gmail.edu',
    'phone number' : '9923342233',
    'Items Bought' : null,
    'Cart' : null,
    'QR-Code' : null,
    'locations of stores to pickup from' :  null
}, {
    'name' : 'Zako',
    'username' : 'zak zak',
    'password' : hashFunction.generate('thunder'), 
    'email' : 'zako@gsu.edu',
    'phone number' : '9864568993',
    'Items Bought' : null,
    'Cart' : null,
    'QR-Code' : null,
    'locations of stores to pickup from' :  null
}, {
    'name' : 'Haroon',
    'username' : 'hackathon man',
    'password' : hashFunction.generate('hacker'), 
    'email' : 'money@crypto.edu',
    'phone number' : '4556654498',
    'Items Bought' : null,
    'Cart' : null,
    'QR-Code' : null,
    'locations of stores to pickup from' :  null
}]; 


//verifying that the user exists 
var persons; 
app.param('id', (req,res,next,id)=>{
    // persons = customers[(id)];
    if(customers[id]){
    req.person = customers[id];
    next();
    }else{
    res.status(404).send(`Cannot retrieve customer with ID: ${id}`)
    }
})

app.get('/', (req,res,next)=>{
    res.status(200).send("OK");
    console.log('active');
})


//gets all users
app.get('/api/user', (req, res,next)=> {
    res.status(200).send(customers);
    console.log('sent all the users data')
})


//get individual user by id 
app.get('/api/user/:id', (req, res,next)=> {
    res.send(req.person);
})


//delete a certain user
app.delete('/api/user/:id', (req, res, next)=> {
    customers = customers.splice(req.params.id, req.params.id+1);
    res.send(customers);
})

//updates the Items bought and items in cart 
app.put('/api/user/:id', (req,res, next)=>{
    let cart = req.query.cart;
    let bought = req.query.bought;
    let qr = req.query.qr;
    let loc = req.query.loc;
    const temp = customers[req.params.id];
    temp['Cart'] = (cart)? cart : temp['Cart'];
    temp['Items Bought'] = (bought)? bought : temp['Items Bought'];
    temp['QR-Code'] = (qr)? qr : temp['QR-Code'];
    temp['locations of stores to pickup from'] = (loc) ? loc : temp['locations of stores to pickup from'];
    customers[req.params.id] = temp;
    res.send(temp);
})


//add a new customer
app.post('/api/user/', (req, res, next)=> {
    customers[customers.length] = req.body;
    res.send(customers);
})


app.listen(PORT, () => { console.log(`Listening on Port ${PORT}`)})