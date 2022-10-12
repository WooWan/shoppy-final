{

  /**
   * Union types : OR 타입
   *
   */

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('up')

  //여러개 중에 하나의 타입을 가질 때는 union type을 사용한다.
  type SuccessState = {
    response: {
      body: string;
    }
  }
  type FailState = {
    reason: string;
  }
  type LoginState = SuccessState | FailState;
  function login() : LoginState {
    return {
      response: {
        body: 'logged in!'
      }
    }
  }

  // 'response'가 if ()안에 있어서 좋은 코드가 아님.
  function printLoginState(state: LoginState) {
    //state가  SuccessState인지 FailState가 들어올 지 미리 알 수 없다.

    //response 가 state에 있다면, SuccessState이다.
    if('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    }else{
      console.log(`😭 ${state.reason}`);
    }

  }
}