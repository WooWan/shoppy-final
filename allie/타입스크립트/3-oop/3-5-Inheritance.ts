{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
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
        makeCoffee(shots: number): CoffeeCup {
            return {
                shots, hasMilk: true,
            }
        }
    }



    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeLatteMachine(23);



    const maker = new CoffeeMachine(5)
    maker.fillCoffeeBeans(3);


    const maker2: CommercialCoffeeMaker = new CoffeeMachine(5)
    maker2.fillCoffeeBeans(3);

    class AmateurUser {
        constructor(private machine: CoffeeMaker) {
            this.machine = machine;
        }
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
        }
    }
    class ProBarista{
        constructor(private machine: CommercialCoffeeMaker) {
            this.machine = machine;
        }

        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            this.machine.fillCoffeeBeans(3);
            this.machine.clean();
        }

    }
}