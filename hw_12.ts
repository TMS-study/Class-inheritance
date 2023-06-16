//Task 1 

// Создайте класс родитель Car и два класса дочерних (любые 2 марки машины), разнесенных по разным модулям. Реализуйте несколько методов для этих классов. В методах, где принимаются какието параметры, сделайте проверку через условный оператор, который в случае неудачи будет выбрасывать исключение. Вызов модулей реализуйте через import, export



export class Car {
    generation: number;
    country: string;

    constructor(generation: number, country: string) {
        this.generation = generation;
        this.country = country;
    }
}




