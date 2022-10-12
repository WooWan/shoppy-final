{
  /**
   * Type inference
   */

  let text = "hello";

  //타입이 자동으로 추론된다.
  //하지만, 로직이 복잡해질 경우 타입을 명시해주는 것이 좋다.
  function add(x: number, y: number){
    return x+ y;
  }

  const result = add(1, 2);

}