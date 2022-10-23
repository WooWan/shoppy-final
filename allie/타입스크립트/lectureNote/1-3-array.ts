{

    //Array
    const fruits: string [] = ['apple', 'banana'];
    const scores: Array<number> = [1, 3, 4];

    // readonly 때 Arrau<> 방식으로 param 전달 불가능해서 string[] 형식이 더 좋은 방식
    function printArray(fruits: readonly string[]) {
        console.log(fruits);
        console.log(fruits.reduce((a, b) => a + b));
    }

    
}