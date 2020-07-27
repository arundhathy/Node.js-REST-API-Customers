const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.json({message: "Welcome to arundhathy's application"}); 
    //res.json() used for sending json requests. res.send() used for sending non-json requests
});

require('C:/Users/arund/Desktop/TKM Docs/nodeJS/customers/app/routes/customers.routes.js')(app);

app.listen(3000, ()=> {
    console.log('server running on port 3000.')
});