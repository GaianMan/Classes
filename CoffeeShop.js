// IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.


// tcs.addOrder("iced tea"); // "This item is currently unavailable!"
// // specifying the variant of "iced tea" will help the process

// tcs.addOrder("cinnamon roll"); // "Order added!"

// tcs.addOrder("iced coffee"); // "Order added!"

// tcs.listOrders; // ["cinnamon roll", "iced coffee"]
// // the list of all the items in the current order

// tcs.dueAmount(); // 2.17



// tcs.listOrders(); // []
// // an empty array is returned if all orders have been exhausted

// tcs.dueAmount(); // 0.0
// // no new orders taken, expect a zero payable

// tcs.cheapestItem(); // "lemonade"

// tcs.drinksOnly(); // ["orange juice", "lemonade", "cranberry juice",
// "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot
// chocolate", "iced coffee"]

// tcs.foodOnly(); // ["tuna sandwich", "ham and cheese sandwich", "bacon and
// egg", "steak", "hamburger", "cinnamon roll"]

const menu = [
    { item: "orange juice", type: "drink", price: 4.5 },
    { item: "lemonade", type: "drink", price: 4.5 },
    { item: "cranberry juice", type: "drink", price: 4.5 },
    { item: "pineapple juice", type: "drink", price: 4.5 },
    { item: "lemon iced tea", type: "drink", price: 4.5 },
    { item: "Latte", type: "drink", price: 4.5 },
    { item: "Espresso", type: "drink", price: 3.0 },
    { item: "Sandwich", type: "food", price: 6.0 },
    { item: "Cake", type: "food", price: 5.0 },
    { item: "Steak", type: "food", price: 5.0 },
    { item: "Bacon and Egg", type: "food", price: 5.0 },
    { item: "tuna sandwich", type: "food", price: 5.0 },
    { item: "ham and cheese sandwich", type: "food", price: 5.0 },
];

// name: a string (basically, of the shop)
// menu: an array of items (of object type), with each item containing the item (name of the item), type
// (whetherfood or a drink) and price.
// orders: an empty array
class CoffeeShop{
    constructor (name,menu){
        this.name=name;
        this.menu=menu;
        this.orders=[];
    }
    #addOrders(item){
        if(menu.find(i=>i.item.toLowerCase()===item.toLowerCase())) {this.orders.push(item); console.log(this.orders);}
        else return "This item is currently unavailable!";
    }
    fulfillOrder=function(){
        let fulfilledItem="";
        if(this.orders.length<1){
            return ("All orderws have been fulfilled!");
        }
        else{
            fulfilledItem=this.orders.unshif();
            return (`The ${fulfilledItem} is ready`);
        }
    }
    listOrders(){
        return (this.orders);
    }
    #dueAmount(){
        return (this.orders.reduce((sum,c)=> (sum.price+=c.price)),0);
    }
    #cheapestItem(){
        let res= this.menu.reduce((cheapest,prices)=>{
            if(cheapest.price<prices.price) 
                 return cheapest;
            else  return prices;
            });
            return res.item;
    }
    #drinksOnly(){
        const res=this.menu.filter(item=>item.type==="drink").map(item=>item.item);
        return `List of Drinks only ::::: ${res}`;
    }
    #foodOnly=function(){
        const res= this.menu.filter(item=>item.type==="food").map(item=>item.item);
        return( `List of Foods only ::::: ${res}`);
    }

    publicAddOrders(item) {
        return this.#addOrders(item);
    }

    publicDueAmount() {
        return this.#dueAmount();
    }

    publicCheapestItem() {
        return this.#cheapestItem();
    }

    publicDrinksOnly() {
        return this.#drinksOnly();
    }

    publicFoodOnly() {
        return this.#foodOnly();
    }
}

const tsc=new CoffeeShop("Tesha's coffee shop",menu);

console.log(tsc.publicAddOrders("hot cocoa"));
console.log(tsc.publicAddOrders("orange juice"));
console.log(tsc.publicAddOrders("ham and cheese sandwich"))
console.log(tsc.publicAddOrders("iced tea"));
console.log(tsc.publicAddOrders("cinnamon roll"));
console.log(tsc.publicAddOrders("lemon iced tea"));

console.log(tsc.publicDrinksOnly());

console.log(tsc.publicFoodOnly());

console.log(tsc.publicCheapestItem());

console.log(tsc.publicDueAmount());

console.log(tsc.listOrders());
//console.log(tcs.fulfillOrder()); // "The cinnamon roll is ready!"
// console.log(tcs.fulfillOrder()); // "The iced coffee is ready!"
// console.log(tcs.fulfillOrder()); // "All orders have been fulfilled!"// all orders have been presumably served