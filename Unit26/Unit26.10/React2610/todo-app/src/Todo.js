import React, { useState } from "react";
function Todo({ task = "default todo", id = "1", remove}) {
  const [editTask, setEditTask] = useState(task);
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => {
    setIsEditing(edit => !edit);
  };
  const handleChange = evt => {
    setEditTask(evt.target.value);
  };
  const handleDelete = () => remove(id);
  const handleUpdate = evt => {
    evt.preventDefault();
    //update(id, editTask);
    setIsEditing(false);
  };
  // default
  let jsx = (
    <div>
      <li>{task}</li>
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={handleDelete}>X</button>
    </div>
  );
  // todo changes
  if (isEditing) {
    jsx = (
      <div>
        <form onSubmit={handleUpdate}>
          <input type="text" value={editTask} onChange={handleChange} />
          <button>+ New Task</button>
        </form>
      </div>
    );
  }
  return jsx;
}
export default Todo;