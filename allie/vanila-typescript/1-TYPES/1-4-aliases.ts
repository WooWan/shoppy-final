{

  /**
   * Type Aliases
   * 타입이 aliases란?: 새로운 타입을 정의하는 것
   */

  type Text= "hello"
  //에러
  //const name: Text = "hi";

  //string literal type
  const name: Text = "hello";

  type Student = {
    name: string;
    age: number;
  }

  const student: Student = {
    name: "ellie",
    age: 12
  }
}