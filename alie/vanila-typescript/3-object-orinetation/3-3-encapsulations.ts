{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }


  class CoffeeMachine {
    // 모든 멤버 변수에서 공유하고 있는 변수는 static level로 정의해서 object마다 만들어지지 않게 한다
    private static BEANS_GRAM_PER_SHOT = 7;
    private coffeeBeans;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans
    }

    static makeMachine(coffeeBeans: number){
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("beans is greater than or equal to 0")
      }
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("not enough coffee beans");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false
      }
    }
  }

  // const machine = new CoffeeMachine(32);
  // console.log(machine.makeCoffee(3));

  const coffeeMachine = CoffeeMachine.makeMachine(3);



}