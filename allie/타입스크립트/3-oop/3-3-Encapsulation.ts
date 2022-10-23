{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    class CoffeeMaker {
        private static BEANS_PER_SHOTS: number = 7;
        private coffeeBeans: number = 0;

        constructor(coffeeBeans:number) {
            this.coffeeBeans = coffeeBeans;
        }

        makeCoffee(shots: number):CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_PER_SHOTS) {
                throw new Error("Not enough coffe beans");
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_PER_SHOTS;
            return {
                shots: shots,
                hasMilk: false,
            };
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0");
            }
            this.coffeeBeans += beans;
        }
    }
    const maker = new CoffeeMaker(5)
    maker.fillCoffeeBeans(3);

    class User{
        get fullName(): string{
            return `${this.firstName} ${this.lastName}`;
        }

        private internalAge: number=4;
        get age(): number {
            return this.internalAge;
        }
        set age(age: number) {
            this.internalAge = this.age;
        }

        constructor(private readonly firstName: string, private readonly lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
}