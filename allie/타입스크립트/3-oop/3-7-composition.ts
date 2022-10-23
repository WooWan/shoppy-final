{
    //상속보다 합성!!!!!!!!!!!!!!!

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

    /**
     * Class가 아닌 Interface에 의존해야 한다.
     */

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_PER_SHOTS: number = 7;
        private coffeeBeans: number = 0;

        constructor(
            coffeeBeans: number,
            private milkSteamer: MilkFrother,
            private sugarProvider: SugarProvider,
        ) {
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

    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }

    class FancyMilkSteamer implements MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return undefined;
        }
    }

    class NoMilk implements MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return undefined;
        }
    }
    class CheapMilkSteamer implements MilkFrother{
        private steamMilk(): void {
            console.log("steaming some milk");
        }

        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return{
                ...cup,
                hasMilk: true,
            }
        }
    }

    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup;
    }

    class CandySugarMixer implements SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return undefined;
        }
    }

    class SugarMixer implements SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return undefined;
        }
    }

    class NoSugar implements SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return undefined;
        }
    }

    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();

    // Candy
    const candySugar = new CandySugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();

    /**
     * 요런식으로 합성
     */
    const coldLatteMachine = new CoffeeMachine(12, fancyMilkMaker, noSugar);


}