{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    const BEANS: number = 7;
    let coffeeBeans: number = 0;
    function makeCoffee(shots: number):CoffeeCup {
        if (coffeeBeans < shots * BEANS) {
            throw new Error("Not enough coffe beans");
        }
        coffeeBeans -= shots * BEANS;
        return {
            shots: shots,
            hasMilk: false,
        };
    }

    const coffee= makeCoffee(2);
    console.log(coffee);
}