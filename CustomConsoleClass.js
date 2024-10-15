class CustomConsole {
    #historyLog;
    #type;
    constructor(type) {
        this.#type = type;
        this.#historyLog = [];
    }

    log(...args) {
        const msg = `${this.#type}: ${args.join(' ')}`;
        this.#historyLog.push(msg);
        return msg;
    }

    get historyLog() {
        return [...this.#historyLog];
    }

    clearHistory() {
        this.#historyLog = [];
        return true;
    }
}

let myConsole=new CustomConsole("Regular");
let fancyConsole = new CustomConsole('Fancy');

myConsole.log([0, 1, 2, 3]);
console.log(myConsole.clearHistory());
//fancyConsole.log([0, 1, 2, 3]);

let a =[{a:1}]

console.log(myConsole.log({ a:1, b:2 }) )
console.log(myConsole.log(a) )