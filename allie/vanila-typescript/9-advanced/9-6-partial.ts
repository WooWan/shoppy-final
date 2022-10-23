{
  type ToDo = {
    title: string;
    description: string;
    priority: 'high' | 'low';
  }

  // type Partial<T> = {
  //   [P in keyof T]?: T[P];
  // };
  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: ToDo = {
    title: 'organize desk',
    description: 'clear clutter',
    priority: 'low',
  }

  const updated = updateTodo(todo, { priority: 'high' });

}