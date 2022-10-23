{


    // function : login -> success, fail
    type SuccessState = {
        result: "success";
        response: {
            body: string;
        };
    };
    type FailState = {
        result: "fail";
        reason: string;
    };
    type LoginState = SuccessState | FailState;

    function login(): LoginState {
        return {
            result: "success",
            response: {
                body: "logged in",
            }
        };
    }

    //이런 식으로 실전 활용
    // function login(id: string, password: string): Promise<LoginState> {}

    //good
    function printLoginState(state: LoginState) {
        if (state.result === "success") {
            console.log(state.response.body);
        } else {
            console.log(state.reason);
        }
    }


}