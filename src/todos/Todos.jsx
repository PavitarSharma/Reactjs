import "./Todo.css";
import TodoForm from "./TodoForm";
import { AxiosInstance } from "../AxiosInstance";
import { useEffect, useState } from "react";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [activeTask, setActiveTask] = useState(null);
  const user = JSON.parse(localStorage.getItem("token"));

  const addTodo = async (text, parentId = null) => {
    const requestBody = {
      id: Math.floor(Math.random() * 1000000),
      task: text,
      username: user.username,
      userId: user.id,
      parentId: parentId,
      createdAt: Date.now(),
    };

    try {
      const { data } = await AxiosInstance.post("/tasks", requestBody);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTodos = async () => {
    try {
      const { data } = await AxiosInstance.get("/tasks");
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const getNestedTask = (taskId) => {
    return todos
      .filter((todo) => todo.parentId === taskId)
      .sort((a, b) => a.id - b.id);
  };

  const rootTodos = todos.filter((todo) => todo.parentId === null);
  const sortedTodos = rootTodos.sort((a, b) => a.id - b.id);

  const deleteTodo = async (todoId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      setTodos(todos.filter((todo) => todo.id !== todoId));
    }
  };

  const updateTodo = (text, todoId) => {
    const updatedTasks = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, body: text };
      }
      return todo;
    });
    setTodos(updatedTasks);
    setActiveTask(null);
  };

  return (
    <div className="todos">
      <h2 className="todo-title">Add your favorite days todo</h2>
      <div className="todo-form-container">
        <TodoForm actionLabel="Add" handleSubmit={addTodo} />
      </div>

      <div className="todos-container">
        {sortedTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            replies={getNestedTask(todo.id)}
            activeTask={activeTask}
            setActiveTask={setActiveTask}
            currentUserId={user.id}
            addTodo={addTodo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
