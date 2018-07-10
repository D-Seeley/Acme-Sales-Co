//Create Data Object for Sales IDs
////Returns an object, it contains values for:
//Customer ID
//Order ID
//Total Amount
////Has method to accept sales
//Create Data Object for Customer Info
////Returns an object, it contains values for:
//Customer ID
//Customer Name

//Create two arrays of object.
//Create compare function, accepting two arrays.


const expect = require('chai').expect;
const Sale = require('../acme-app').sale;
const Customer = require('../acme-app').customer;
const comp = require('../acme-app').comp;

describe('Create Data Object for Sales IDs', ()=> {
    const sale = new Sale(1,2,3);

    it('Creates an object', ()=> {
        expect(sale).to.be.ok;
        expect(sale).to.be.an.instanceof(Sale);
    });

    it('sales has properties: Customer ID, Order ID, and Total Amount', ()=> {
        expect(sale.customerID).to.be.a('number');
        expect(sale.orderID).to.be.a('number');
        expect(sale.total).to.be.a('number');
    });

});

describe('Create Data Object for Customer Info', () => {
    const customer = new Customer(1, 'Steve');
    
    it('Creates an object', () => {
        expect(customer).to.be.ok;
        expect(customer).to.be.instanceof(Customer);
    });

    it('Has properties of ID Number, and Name', () => {
        expect(customer.customerID).to.be.a('number');
        expect(customer.name).to.be.a('string');
    });
});

const salesRecord = [];
salesRecord.push(new Sale(1,26,9.99));
salesRecord.push(new Sale(2,26,19.99));
salesRecord.push(new Sale(3,13,29.99));
salesRecord.push(new Sale(4,10,59.99));
salesRecord.push(new Sale(5,13,99.99));


const customerRecord = [];

customerRecord.push(new Customer(10, 'Eli'));
customerRecord.push(new Customer(13, 'Odell'));
customerRecord.push(new Customer(26, 'Saquan'));

console.log(salesRecord);
console.log(customerRecord);
comp(salesRecord, customerRecord);

describe('Compile function', () => {
    it('Comp is a function that returns an array', () => {
        expect(comp).to.be.a('function');
    });
    it('Array lists sales, with CustomerID replaced with customer name', () => {
        expect(comp(salesRecord, customerRecord)).to.equal(`[ { orderID: 1, name: 'Saquan', total: 9.99 }, { orderID: 2, name: 'Saquan', total: 19.99 }, { orderID: 3, name: 'Odell', total: 29.99 }, { orderID: 4, name: 'Eli', total: 59.99 }, { orderID: 5, name: 'Odell', total: 99.99 } ]`);
    });
    //It prints an array
});

