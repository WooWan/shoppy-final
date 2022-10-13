{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log('full time');
    }

    workFullTime() {
    }
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log('part time');
    }

    workPartTime() {
    }
  }

  // function pay(employee: Employee): Employee {
  //   employee.pay();
  //   return employee;
  // }

  // 5-generic type에 대한 정보가 없어서 함수를 호출할 수 없다
  // Genertic type extends Employee를 통해 제한을 걸어준다
  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();

  ellie.workFullTime()
  bob.workPartTime()
  // Employee interface를 retrun받기 때문에 ellie.workFullTime() 을 호출 할 수 없다.
  const ellieAfterPay = pay(ellie);
  const bobAfterPay = pay(bob);

  const obj = {
    name: 'ellie',
    age: 20,
  }

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
  }

  const value = getValue(obj, 'name')
  console.log(value)


}