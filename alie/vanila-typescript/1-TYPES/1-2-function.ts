{


  // @ts-ignore
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //Optional Parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
}