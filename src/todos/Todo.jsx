import { useCallback, useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";

const Todo = ({
  todo,
  replies,
  activeTask,
  setActiveTask,
  currentUserId,
  parentId = null,
  addTodo,
  deleteTodo,
  updateTodo,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleOpen = useCallback(() => setIsActive(!isActive), [isActive]);

  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === todo.userId;
  const canDelete = currentUserId === todo.userId;
  const replyId = parentId ? parentId : todo.id;

  const isReplying =
    activeTask && activeTask.id === todo.id && activeTask.type === "replying";
  const isEditing =
    activeTask && activeTask.id === todo.id && activeTask.type === "editing";
  return (
    <>
      <div className="todo">
        <div className="todo-body" onClick={handleOpen}>
          {!isEditing && <p className="todo-body-task">{todo.task}</p>}
          {isEditing && (
            <TodoForm
              submitLabel="Update"
              hasCancelButton
              initialText={todo.task}
              handleSubmit={(text) => updateTodo(text, todo.id)}
              handleCancel={() => {
                setActiveTask(null);
              }}
            />
          )}
          {canReply && (
            <button
              className="todo-reply todo-button-action"
              onClick={() => setActiveTask({ id: todo.id, type: "replying" })}
            >
              Add More
            </button>
          )}
          {canEdit && (
            <button
              className="todo-reply todo-button-action"
              onClick={() => setActiveTask({ id: todo.id, type: "editing" })}
            >
              Edit
            </button>
          )}

          {canDelete && (
            <button
              className="todo-reply todo-button-action"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          )}
        </div>

        {isReplying && (
          <TodoForm
            actionLabel="replying"
            handleSubmit={(text) => addTodo(text, replyId)}
          />
        )}

        {isActive && (
          <div className="nested-todo">
            {replies.length > 0 &&
              replies.map((reply) => (
                <Todo
                  key={reply.id}
                  todo={reply}
                  replies={[]}
                  activeTask={activeTask}
                  setActiveTask={setActiveTask}
                  currentUserId={currentUserId}
                  parentId={todo.id}
                  addTodo={addTodo}
                  deleteTodo={deleteTodo}
                  updateTodo={updateTodo}
                />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Todo;
