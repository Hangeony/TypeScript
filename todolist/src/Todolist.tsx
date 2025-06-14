import React, { FC, useState } from "react";
import { Button } from "react-bootstrap";

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

const Todolist: FC = () => {
  const title: string = "오늘 할일";
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "공부하기", isChecked: false },
    { id: 2, text: "과제하기", isChecked: false },
    { id: 3, text: "청소하기", isChecked: false },
  ]);

  const [newTodo, setNewTodo] = useState<string>("");
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectTodo, setSelectTodo] = useState<Todo | null>(null);

  const handleCheckedChange = (itemId: number) => {
    setTodos((todoItems) =>
      todoItems.map((i) =>
        i.id === itemId ? { ...i, isChecked: !i.isChecked } : i
      )
    );
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }]);
      setNewTodo("");
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleTodoClick = (todo: Todo) => {
    setShowDetail(true);
    setSelectTodo(todo);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <>
      <h1>{title}</h1>
      <p></p>
      <div className="container">
        <div className="inputSpace">
          <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
          <Button onClick={addTodo}>➕ 추가</Button> <p></p>
        </div>
        <div className="board">
          <ul>
            {todos.map((todo, i) => (
              <li className="todo-item" key={i}>
                <input
                  type="checkbox"
                  className="todo-checkbox"
                  checked={todo.isChecked}
                  onChange={() => handleCheckedChange(todo.id)}
                />
                <span
                  className="todo-text"
                  onClick={() => handleTodoClick(todo)}
                >
                  {todo.isChecked ? (
                    <del>{todo.text}</del>
                  ) : (
                    <span>{todo.text}</span>
                  )}
                </span>
                <Button
                  variant="danger"
                  className="todo-button"
                  onClick={() => removeTodo(todo.id)}
                >
                  🗑️ 삭제
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todolist;
