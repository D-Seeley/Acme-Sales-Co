function Sale(orderID, custID, total) {
    this.orderID = orderID;
    this.customerID = custID;
    this.total = total;
};

function Customer(custID, name) {
    this.customerID = custID;
    this.name = name;
};

function comp(orders, customers) {
    const ret = [];

    for (let i = 0; i < orders.length; i++) {
        for (let j = 0; j < customers.length; j++) {
            if (orders[i].customerID == customers[j].customerID) {
                ret.push({orderID: orders[i].orderID, name: customers[j].name, total: orders[i].total});
                console.log(ret);
            }
        } 
    }
    
    return ret;
};

module.exports = {
    sale: Sale, 
    customer: Customer,
    comp: comp
};