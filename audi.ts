import { Car } from "./hw_12";

class Audi extends Car {
    expencivePrice: number;

    constructor(generation: number,  country: string, expencivePrice: number ){
        super(generation, country);
        this.expencivePrice = expencivePrice;
    }

     isExpencivePrice(){
        if(this.expencivePrice <= 500){
            throw new Error('Unknow price');
        } else if(this.expencivePrice > 5000){
            console.log(`it is cost ${this.expencivePrice} - expencive car`);
        } else {
            console.log('it is cheap car');
        }
    }
}



const myAudi = new Audi(2000, 'Italy', 6000);
console.log(myAudi);
myAudi.isExpencivePrice();