{
  class Animal {}

  class Dog extends Animal{}
  class Cat extends Animal{
    isCat: boolean = true;
  }

  const animals: Animal[] = [new Cat(), new Cat(), new Dog()]

  // is typeguard는
  // is animal Cat? 으로 이해하면 쉬움 => Cat이면 true, 아닐 시 false
  console.log(animals.every<Cat>((animal): animal is Cat => (animal as Cat).isCat !== undefined));
}