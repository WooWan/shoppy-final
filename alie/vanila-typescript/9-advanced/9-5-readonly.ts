{
  type Todo = {
    title: string;
    description: string;
  }

  function display(todo: Readonly<Todo>) {
    //ReadOnly 로 수정해주어야 한다.
    // todo.title = 'jaja' // error
  }
}