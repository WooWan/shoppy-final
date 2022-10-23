{


    /**
     * Type assertions
     * 타입 캐스팅해도 런타임 전까지 오류를 잡아내지 못한다. 사용 지양
     */
    function jsString(): any {
        return 2;
    }

    const result = jsString();
    console.log((result as string).length);

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    //최
    const numbers = findNumbers()!;
    numbers.push(1);
    //100프로 확신할 수 있을 경우에만
    const button = document.querySelector("class")!;
}