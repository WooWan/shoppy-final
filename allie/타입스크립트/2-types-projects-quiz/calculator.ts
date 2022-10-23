/**
 * Let's make a calculator 🧮
 */
console.log(calculate('remain', 5, 2)); // 1
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2


type Command = "add" | "substract" | "multiply" | "divide" | "remain";


function calculate(command: Command, a: number, b: number): number {
    switch (command) {
        case "add":
            return a + b;
            break;
        case "substract":
            return a - b;
            break;
        case "multiply":
            return a * b;
            break;
        case "remain":
            return a//b
            break;
        case "divide":
            return a / b;
            break;


    }
}