
{

    // //javascript
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }
    //
    // function add(num1: number, num2: number): number {
    //     return num1 + num2;
    // }
    //
    // function fetchNum(id: string): Promise<number> {
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    //Javascript  -> Typescript
    //Optional parameter 사용
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }

    printName("woo");
    printName("wan")
    printName("woo", "wan");

    function printMessage(message: string = ' default message') {
        console.log(message);
    }

    //Rest parameter
    function addNumber(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }
    console.log(addNumber(1, 2));
}