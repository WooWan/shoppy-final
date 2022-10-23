{
  type Page = 'home' | 'about' | 'contact';


  type PageObj = {
    home: "1"
    about: "2"
    contact: "3"
  }
  
  type PageInfo = {
    title: string;
  }


  //record 타입은 맵드 타입의 하나로, 특정 타입을 다른 타입으로 맵핑하는 역할을 한다.
  //page가 key, pageInfo가 value인 맵을 만들어준다.

  type TPartial<T> = {
    [P in keyof T]?: T[P];
  };
  type Records<K, T> ={
    [P in keyof K]: T
}

  type TRecord<K extends keyof any, T> = {
    [P in K]: T;
  };

  const nav: Records<PageObj, PageInfo> = {
    home: {title: '2'},
    // home: { title: 'Home' },
    about: { title: 'About' },
    contact: { title: 'Contact' },
  }
  console.log(nav)
}