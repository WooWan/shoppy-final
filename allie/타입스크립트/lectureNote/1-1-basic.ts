
{
    let age: number | undefined;

    let person: string | null;


    let notSure: unknown = 0;
    notSure = 3;


    function print(): void {
        console.log("hello");
    }

    function throwError(message: string): never {
        throw new Error(message);
        // while (true) {
        //
        // }
    }

    let obj: object;


}
