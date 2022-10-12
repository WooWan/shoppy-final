{
  // TypeScript

  /**
   * 타입은 최대한 자세하게 작성하는 것이 좋다.
   */
  let name = 'hello';

  const num = 'n';

  //never
  function error(message: string): never {
    throw new Error(message);
  }

  //object
  let obj: object;
  function acceptSomeObject(obj: object) {}

  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });


}