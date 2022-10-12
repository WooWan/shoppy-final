{
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    }
  }

  type FailState = {
    result: "fail";
    reason: string;
  }

  type LoginState = SuccessState | FailState;

  function printLoginState(state: LoginState) {

    //state.result 공통으로 알고 있어 타입스크립트에서 state.result를 사용할 수 있다.
    if(state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    }else{
      console.log(`😭 ${state.reason}`);
    }
  }
}