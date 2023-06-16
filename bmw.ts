import { Car } from "./hw_12";

class BMW extends Car {
    cheapPrice: number;

    constructor(generation: number,  country: string, cheapPrice: number ){
        super(generation, country);
        this.cheapPrice = cheapPrice;
    }

     isCheapPrice(){
        if(this.cheapPrice <= 500){
            throw new Error('Unknow price');
        } else if(this.cheapPrice > 2000 && this.cheapPrice < 500){
            console.log(`it is cost ${this.cheapPrice} - cheap car`);
        } else {
            console.log('it is expencive car');
        }
    }  
}

const myBMW = new BMW(2005, 'Germany', 500);
console.log(myBMW);
myBMW.isCheapPrice();