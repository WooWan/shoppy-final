{
//에러는 어디에서 핸들링해야하는 걸까?
//의미 있는 에러처리 방법

// 세부적인 에러 클래스
// throw error 남발 하면 절대 안됌 , 에러를 던지기보다는 error state로 만들어서 에러를 처리해야함

  class TimeOutError extends Error {
  }

  class OfflineError extends Error {
  }

  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };
  type SuccessState = {
    result: 'success';
  };
  type ResultState = SuccessState | NetworkErrorState;


  //error를 throw하는 대신, error state를 return하는 방식으로 에러를 처리
  class NetworkClient {
    tryConnect(): ResultState {
      return { result: 'success'}
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {
    }

    login() {
      this.client.tryConnect()
    }
  }

  class App {
    constructor(private userService: UserService) {
    }

    run() {
      try {
        this.userService.login()
      } catch (error) {
        //show dialog to user 의미있는 에러처리

      }
    }
  }

  const client = new NetworkClient()

  const service = new UserService(client)
  const app = new App(service)
  app.run()


}