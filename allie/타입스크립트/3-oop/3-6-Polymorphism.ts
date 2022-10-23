{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_PER_SHOTS: number = 7;
        private coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }
        clean(): void {
            console.log("cleaning up");
        }

        grindBeans(shots: number) {
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_PER_SHOTS) {
                throw new Error("Not enough coffee beans");
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_PER_SHOTS;
        }

        private preheat(): void {
            console.log("heating up");
        }

        private extract(shots: number): CoffeeCup {
            console.log("extracting..!");
            return {
                shots: shots,
                hasMilk: false,
            };
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0");
            }
            this.coffeeBeans += beans;
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(shots: number, public readonly serialNumber: number) {
            super(shots);
        }
        makeCoffee(shots: number): CoffeeCup {
            return {
                shots, hasMilk: true,
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return {
                ...coffee,
                hasSugar: true,
            };
        }
    }

    const machines = [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, 1),
        new SweetCoffeeMaker(16),
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, 1),
        new SweetCoffeeMaker(16),
    ];

    //상속보다 합성




    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeLatteMachine(23,3);



    const maker = new CoffeeMachine(5)
    maker.fillCoffeeBeans(3);


    const maker2: CommercialCoffeeMaker = new CoffeeMachine(5)
    maker2.fillCoffeeBeans(3);


}