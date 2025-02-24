// Task 1 - Creating a Product Class
class Product {
    constructor(name, id, price, stock) {
        this.name = name
        this.id = id
        this.price = price
        this.stock = stock
    }
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: ${this.price}, Stock: ${this.stock}`
    }
    updateStock(quantity) {
        return this.stock -= quantity
    }
}

const prod1 = new Product("Laptop", 101, 1200, 10)
console.log(prod1.getDetails())
prod1.updateStock(3)
console.log(prod1.getDetails())

// Task 2 - Creating an Order Class
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId
        this.product = product
        this.quantity = quantity
        this.product.updateStock(quantity)
    }
    getOrderDetails() {
        const totalPrice = this.product.price * this.quantity
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${totalPrice}`
    }
}

const order1 = new Order(501, prod1, 2)
console.log(order1.getOrderDetails())
console.log(prod1.getDetails())

// Task 3 - Creating an Inventory Clasee
class Inventory {
    constructor() {
        this.products = []
        this.orders = []
    }
    addProduct(product) {
        this.products.push(product)
    }
    listProducts() {
        this.products.forEach((product => console.log(product.getDetails())))
    }
// Task 4 - Implementing Order Management
    placeOrder(orderId, product, quantity) {
        if (product.stock >= quantity) {
        const newOrder = new Order(orderId, product, quantity)
        this.orders.push(newOrder)
        }
        else {
            return `Order not possible due to low stock.`
        }
    }
    listOrders() {
        this.orders.forEach((order => console.log(order.getOrderDetails())))
    }
}

const inventory = new Inventory()
inventory.addProduct(prod1)
inventory.listProducts()
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
console.log(prod1.getDetails());