// Task 1 - Creating a Product Class
class Product { // creation of class
    constructor(name, id, price, stock) { // setup of each class property
        this.name = name // setup new property
        this.id = id // setup new property
        this.price = price // setup new property
        this.stock = stock // setup new property
    }
    getDetails() { // function displaying details
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`
    }
    updateStock(quantity) { // function to keep stock updated
        return this.stock -= quantity
    }
    reStock(quantity) { // funtion to be able to add more stock when needed (task 5)
        return this.stock += quantity
    }
}

const prod1 = new Product("Laptop", 101, 1200, 10) // establish a product instance
console.log(prod1.getDetails()) // log results
prod1.updateStock(3) // take 3 from stock
console.log(prod1.getDetails()) // log results

// Task 2 - Creating an Order Class
class Order { // creation of order class
    constructor(orderId, product, quantity) { // setup of each class property
        this.orderId = orderId // setup new property
        this.product = product // setup new property
        this.quantity = quantity // setup new property
        this.product.updateStock(quantity) // property to ensure product stock is updated when order is placed 
    }
    getOrderDetails() { // function displaying details
        const totalPrice = this.product.price * this.quantity // establish formula for total order price
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${totalPrice}`
    }
}

const order1 = new Order(501, prod1, 2) // establish an order instance
console.log(order1.getOrderDetails()) // log results
console.log(prod1.getDetails()) // log results

// Task 3 - Creating an Inventory Clasee
class Inventory { // creation of inventory class
    constructor() { // no stated properties 
        this.products = [] // array of products
        this.orders = [] // array of orders
    }
    addProduct(product) { // function to add product to array
        this.products.push(product)
    }
    listProducts() { // function to list all products in array
        this.products.forEach((product => console.log(product.getDetails())))
    }
// Task 4 - Implementing Order Management
    placeOrder(orderId, product, quantity) { // function to create new order
        if (product.stock >= quantity) { // if stock allows
        const newOrder = new Order(orderId, product, quantity) // new order placed
        this.orders.push(newOrder) // new order is pushed to array of orders
        }
        else { // error message if needed
            return `Order not possible due to low stock.`
        }
    }
    listOrders() { // function to list all orders in array
        this.orders.forEach((order => console.log(order.getOrderDetails())))
    }
// Task 5 - Implementing Product Restocking
    restockProduct(productId, quantity) { // function to restock specific product 
        const reStockProduct = this.products.find(product => product.id === productId) // find instance where parameter matches product id within the array
        if (reStockProduct) { // if there is an instance
            reStockProduct.reStock(quantity) // restock by an inputted quantity (reference line 15)
        }
    }
}

const inventory = new Inventory() 
inventory.addProduct(prod1) // add product to array
inventory.listProducts() // log results
inventory.placeOrder(601, prod1, 2) // place order
inventory.listOrders() // log results
console.log(prod1.getDetails()) // log results
inventory.restockProduct(101, 5) // restock product
console.log(prod1.getDetails())  // log results