//duck typing

interface Vector2D {
  x: number;
  y: number;
}

function calculateLength(v: Vector2D){
  return Math.sqrt(v.x* v.x + v.y*v.y)
}

interface NamedVector {
  name: string;
  x: number;
  y: number;
}

const v1 : NamedVector ={x:3, y:5 , name: "woo"}

//Vector2D와 NamedVector의 관계가 없어도 구조적으로 동일하면 호출할 수 있다 => duck typing
calculateLength(v1);


interface Vector3D {
  x: number;
  y: number;
  z: number;
}
function normalize(v: Vector3D){
  const length = calculateLength(v);
  return {
    x: v.x /length,
    y: v.y/length,
    z: v.z/length,
  }
}

console.log(normalize({x:3, y:4, z:5}))


function calculateLengthL1(v: Vector3D){
  let length = 0;
  for (const axis of Object.keys(v)) {
    console.log(axis)
    // 구조적 타이핑 때문에 axis는 string으로 추론되고, 오류 발생
    // const coord = v[axis]
    // length += Math.abs(coord);
  }
}


//Vector 3D로 선언되어 있지만 타입은 open되어 있기 때문에 확장된 타입으로 호출할 수 있다 => 문제
const vec3D = {x:3, y:4, z:1, address: '123 broadway'}
calculateLengthL1(vec3D)


class C {
  foo: string;
  constructor(foo:string) {
    this.foo = foo;
  }
}

const c = new C("instance of C");
const d: C = {foo: "obbjectl iteral"}

