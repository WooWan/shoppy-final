{
  //상속보다 합성을 고려해야 한다
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }


  //추상 클래스의 목적 => 공통 함수를 정의하고, 구현이 다른 메서드를 abstract 추상 메서드로 선언해서 상속받는 클래스에서 구현하도록 한다
  abstract class CoffeeMachineImpl implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number, private milk: MilkFrother, private sugar: SugarProvider) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...🧼');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachineImpl.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachineImpl.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up... 🔥');
    }

    //추상메서드 : 구현부가 없는 메서드
    // 자식 클래스의 구현을 강제하기 위해 사용한다
    // 우리가 하고 싶은 것 => 부모의 makeCoffee의 호출을 강제하고 싶어!
    protected abstract extract(shots: number): CoffeeCup //abstract 메서드 자식 class에서 구현

    //이전 버전
    // private extract(shots:number):CoffeeCup{
    //   console.log(`Pulling ${shots} shots... ☕️`);
    //   return {
    //     shots,
    //     hasMilk: false,
    //   };
    // }


    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  class CaffeLatteMachine extends CoffeeMachineImpl {
    constructor(beans: number, public readonly serialNumber: string, milk: MilkFrother) {
      super(beans, milk, new SugarMixer());
    }

    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }

    // makeCoffee(shots: number): CoffeeCup {
    //   const coffee = super.makeCoffee(shots);
    //   return {...coffee, hasMilk: true};
    // }

    //자식 extract 메서드는 부모의 메서드를 super.makeCoffee()를 통해 호출한다.

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }


  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from jar... 🍭');
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from jar... 🍭');
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  // class CaffeLatteMachine extends CoffeeMachineImpl {
  //
  //   constructor(coffeeBeans: number, public readonly serialNumber: string, private milkFrother: MilkFrother) {
  //     super(coffeeBeans);
  //   }
  //
  //   makeCoffee(shots: number): CoffeeCup {
  //     return this.milkFrother.makeMilk(super.makeCoffee(shots));
  //   }
  // }
  //
  // class SweetCoffeeMaker extends CoffeeMachineImpl {
  //   constructor(coffeeBeans: number, private sugar: SugarProvider) {
  //     super(coffeeBeans);
  //   }
  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     return this.sugar.addSugar(coffee);
  //   }
  // }

  // 개선점: class 가 다른 class에 의존하고 있다.
  // interface를 사용하면 class가 아닌 interface에 의존하게 된다.
  // class SweetCaffeLatteMachine extends CoffeeMachineImpl {
  //   constructor(coffeeBeans: number, private milk: MilkFrother, private sugar: SugarProvider) {
  //     super(coffeeBeans);
  //   }
  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     return this.sugar.addSugar(this.milk.makeMilk(coffee));
  //   }
  // }

  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();

  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();

  //합성을 사용하면, class가 아닌 interface에 의존하게 된다.
  //많은 수직적인 상속관계를 사용하지 않고, 유연하게 instance들을 생성할 수 있다.

  // const sweetMachine = new SweetCoffeeMaker(12, candySugar);
  // const candySweetMachine = new SweetCoffeeMaker(12, candySugar);


  // const sweetCaffeLatteMachine = new SweetCaffeLatteMachine(12, cheapMilkMaker, candySugar);
  // const fancyCaffeLatteMachine = new SweetCaffeLatteMachine(12, fancyMilkMaker, sugar);

}