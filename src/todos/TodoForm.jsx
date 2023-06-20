import { useState } from "react";
import "./Todo.css";
const TodoForm = ({
  actionLabel,
  handleSubmit,
  initialValue = "",
  hasCancelButton = false,
  handleCancel,
}) => {
  const [task, setTask] = useState(initialValue);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(task);
    setTask("");
  };
  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Create a Todo</label>
        <input
          type="text"
          id="task"
          name="task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
      </div>
      <button type="submit" className="todo-button">
        {actionLabel}
      </button>
      {hasCancelButton && (
        <button type="button" className="todo-button" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default TodoForm;
