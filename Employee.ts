class Employee extends Person {
    location:string;

    constructor(name:string,age:number,location:string){
        super(name,age);
        this.location = location;
    }
}