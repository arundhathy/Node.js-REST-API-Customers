const Customer = require('C:/Users/arund/Desktop/TKM Docs/nodeJS/customers/app/models/customer.models.js');

//create and save a new customer
exports.create = (req, res) => {

  // Validate request
  if(req == undefined){
  	console.log("Request is undefined");
  	return;
  }else if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });

    console.log("Req.body is empty");
    return;
  }
  
  // Create a Customer
  const customer = new Customer({
    email: req.body.email,
    name: req.body.name,
    active: req.body.active
  });

  // Save Customer in the database
  Customer.create(customer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};


//retrieve all customers from the database
exports.findAll = (req, res) =>{
    Customer.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while fetching all customers."
          });
        else res.send({ message: "All Customers fetched successfully!" });
    })

};

//find a single customer with customerId
exports.findOne = (req, res) =>{
    Customer.findById(req.params.customerId, (err, data) => {
        if(err) {
            if(err.kind === 'not_found'){
                res.status(404).send({
                    message: "Not found customer with id " + req.params.customerId
                });
            } else {
                res.status(500).send({message: 'Error retrieving customer with id ' + req.params.customerId});
            }
        }
        else {
            res.send(data);
        }
        
    });

};

//update a customer identified by customerId in the request
exports.update = (req, res) =>{
    //validate request
    if(!req.body)
    {
        res.status(400).send({message:"Content cannot be empty"});
    }
    Customer.updateById(req.params.customerId, new Customer(req.body), (err, data) => {
        if(err) {
            if(err.kind == 'not_found'){
                res.status(404).send({
                    message: "Not found customer with id " + req.params.customerId
                });
            } else {
                res.status(500).send({message: "Error retrieving customer with id " + req.params.customerId});
            }
        }
        else {
            res.send(data);
        }
    });
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
    Customer.remove(req.params.customerId, (err, data) => {
        if(err) {
            if(err.kind == 'not_found'){
                res.status(404).send({
                    message: "Not found customer with id " + req.params.customerId
                });
            } else {
                res.status(500).send({message: "Error deleting customer with id " + req.params.customerId});
            }
        }
        else {
            res.send(data);
        }
    });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    Customer.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all customers."
          });
        else res.send({ message: `All Customers were deleted successfully!` });
      });
}; 