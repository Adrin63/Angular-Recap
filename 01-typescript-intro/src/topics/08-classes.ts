export class Person {
    constructor(
        public name:string,
        private address:string = 'bcn'
    ){ name = name, address = address}
}

export class Hero {
    constructor(public alterEgo: string, public age:number = 20, public realName:string, public person: Person){
        this.person = new Person(realName);
    }
}

const person = new Person('Tony', 'NY');





const ironman = new Hero('IronMan', 20, 'aa', person)

console.log(ironman)