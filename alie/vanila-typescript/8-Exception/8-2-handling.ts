//에러는 어디에서 핸들링해야하는 걸까?
//의미 있는 에러처리 방법

// 세부적인 에러 클래스
class TimeOutError extends Error{}
class OfflineError extends Error{}
class NetworkClient{
  tryConnect(): void{
    throw new Error('no network')
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
    try{
      this.userService.login()
    }catch(error){
      //show dialog to user 의미있는 에러처리

    }
  }
}
const client = new NetworkClient()

const service = new UserService(client)
const app = new App(service)
app.run()


