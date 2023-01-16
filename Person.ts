class Person {
    public name:string;
    private _age:number;

    constructor(name:string,age:number){
        this.name=name;
        this._age=age;
    }
}

const person = new Person("YS",1);
console.log(person);

