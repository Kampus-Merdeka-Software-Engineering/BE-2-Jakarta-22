class Cart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
    }

    addChart(name, price) {
        const cartItem = {
            name,
            price,
        };

        this.items.push(cartItem);
        this.totalPrice += price;
    }

    updateChart(index, newName, newPrice) {
        const cartItem = this.items[index];
        cartItem.name = newName;
        cartItem.price = newPrice;

        this.totalPrice -= cartItem.price;
        cartItem.price = newPrice;
        this.totalPrice += cartItem.price;
    }
}

module.exports = { Cart };