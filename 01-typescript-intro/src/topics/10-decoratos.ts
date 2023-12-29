function classDecorator(
    constructor: any
){
    return class extends constructor{
        newProperty = 'New Property';
        hello = ' override';
    }
}




// @classDecorator
export class SuperClass{
    public miProperty: string ='ABC123';
    print(){
        console.log('Hi Mundo')
    }
 }


console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);