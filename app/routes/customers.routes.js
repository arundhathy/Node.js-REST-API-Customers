module.exports = app =>
{
    const customers = require('C:/Users/arund/Desktop/TKM Docs/nodeJS/customers/app/controllers/customer.controller.js');

    //create a new customer
    app.post('/customers', customers.create);

    //retrieve all customers
    app.get('/customers', customers.findAll);

    //retrieve a single customer by customer id
    app.get('/customers/:customerId', customers.findOne);

    //update a customer with customer id
    app.put('/customers/:customerId', customers.update);

    //delete a customer with customer id
    app.delete('/customers/:customerId', customers.delete);

    //delete all customers
    app.delete('/customers', customers.deleteAll);
};