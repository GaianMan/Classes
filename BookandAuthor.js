class Author{
    constructor(name,email,gender){
        this._name=name;
        this._email=email;
        this._gender=gender;
    }

    get name(){
        return this._name;
    }

    set name(name){
        if (typeof name!="string")
            throw new error("Input is not valid, name must be string");
    }

    get email(){
        return this._email;
    }

    set email(email){
        if (!email.includes("@")) {
            throw new Error("Invalid email address.");
        }
        this._email=email;
    }

    get gender(){
        return this._gender;
    }

    set gender(gender){
        if (gender!=="female" && gender!=="male") 
            throw new Error("Gender is female or male");
        this._gender=gender;
    }

    toString(){
        if (this._gender==="male") console.log(`Mr. ${this._name}`);
        else console.log(`Ms. ${this._name}`);
    }
}

class Books{
    constructor(title,author,price,quantity){
        this._title=title;
        this._author=author;
        this._price=price;
        this._quantity=quantity;

    }

    get title(){
        return this._title;
    }

    set title(title){
        this._title = value;
    }

    get author(){
        return this._author;
    }

    set author(author){
        if (!(author instanceof Author)) {
            throw new Error("Author must be an instance of the Author class.");
        }
        this._author = value;
    }

    get price(){
        return this._price;
    }

    set price(price){
        if ((typeof price) !== 'number' ) {
            throw new Error('Price must be a number.');
        }
        else if(price === 0) return("Book is free!");
        this._price = price;
    }

    get quantity(){
        return this._quantity;
    }

    set quantity(quantity){
        if (typeof quantity !="number" || quantity < 0) {
            throw new Error("Quantity must be a positive integer.");
        }
        this._quantity = quantity;
    }

    getProfit(){
        return this._quantity*this._price;

    }

    toString(){
        return `${this._author} ${this._title}`;
    }
}

let author1 = new Author("J. K. Rowling", "abc@gmail.com", "female");
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling
//author1.name = 12; // throws error
