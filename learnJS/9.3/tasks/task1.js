class Rabbit extends Object {
    constructor(name) {
        super();            //Если есть наследование, то в конструкторе нужен super
        this.name = name;
    }
}

let rabbit = new Rabbit("Кроль");

console.log(rabbit.hasOwnProperty('name')); 
