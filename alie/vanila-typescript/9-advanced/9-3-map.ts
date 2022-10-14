{
  // 재사용성이 너무 떨어진다. 하나의 타입을 수정할 때마다 모든 관련 타입을 수동으로 수정해줘야함
  type Video = {
    title: string;
    author: string;
  }

  type VideoOptional = {
    title?: string;
    author?: string;
  }
  type VideoReadOnly = {
    readonly title: string;
    readonly author: string;
  }

  //mapped Type을 이용해서 전 key value를 다른 타입으로 변환할 수 있다
  type Optional<T> = {
    [P in keyof T]?: T[P] // for ... in
  }
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]
  }
  type VideoOptional2 = Optional<Video>;
  const vidoeOp: VideoOptional2 = {


  }
  type Animal = {
    name: string;
    age: number;
  }
  type AnimalType = Optional<Animal>
  const animal: Optional<Animal> = {
    name: 'dog'
  }

  type Nullable<T> = {
    [P in keyof T]: T[P] | null
  }
  const nullableVideo: Nullable<Video> = {
    title: null,
    author: '창완'
  }

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  }

  type Proxify<T> = {
    [p in keyof T]: Proxy<T[p]>
  }

}