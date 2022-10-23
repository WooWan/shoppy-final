{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    class CoffeeMaker {
        static BEANS_PER_SHOTS: number = 7;
        coffeeBeans: number = 0;
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

        coffee= this.makeCoffee(2);
    }
    const maker = new CoffeeMaker(5)
}