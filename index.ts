import axios from 'axios';
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then(response =>{
  // Response.data has properties of:
  // id
  // title
  // completed
  const todo = response.data as Todo;
  console.log("todo =", todo);

  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  logToDo(id, title, finished);


});

const logToDo = (id: number, title: string, finished: boolean) => {
  console.log(`
    The Todo with ID:${id}
    has a title of: ${title}
    Is it finished? ${finished}
  `)
}