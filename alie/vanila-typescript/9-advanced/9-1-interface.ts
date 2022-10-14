{
  type PositionType = {
x: number;
y: number;
  }

  interface PositionInterface {
    x: number;
    y: number;
  }
  // typescript interface를 재정의해서 사용할 수 있다
  interface PositionInterface {
    z: number;
  }

  // object
  const obj1: PositionType = {
    x: 1,
    y: 1
  }
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z:3,
  }

  // class Pos1 implements PositionType {
  //   x: number;
  //   y: number;
  //
  // }
  // class Pos2 implements PositionInterface {
  //   x: number;
  //   y: number;
  // }

  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };


  type Person = {
    name: string;
    age: number;
  }
  //타입을 계산할 때도 사용가능
  type Name = Person['name']; // string
}