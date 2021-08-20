// object 를 정의할 때 property type까지 자세하게 정의하기 

/*
type Todo = { //type 별칭 사용 가능
  id: number; 
  title: string;
  done: boolean;
}
*/

interface Todo { //type 별칭보다 인터페이스 사용
  id: number; 
  title: string; 
  done: boolean;
}
let todoItems: Array<Todo>; //{id: number; title: string; done: boolean}[] 표현도 가능

// api
function fetchTodoItems(): Array<Todo> {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos():Array<Todo> {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): Todo {
  return todoItems[0];
}

function showCompleted():Array<Todo> {
  return todoItems.filter(item => item.done);
  //item.done===true 인 item들을 걸러내 배열로 반환
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(todo1: Todo, todo2:Todo): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  // 수업에서는 인자를 넘기지 않고 안에서 객체를 생성함
  addTodo(todo1);
  addTodo(todo2);
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
//addTwoTodoItems();
log();
