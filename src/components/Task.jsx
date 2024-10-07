import { useState } from "react";
import IconButton from "./IconButton";
import classes from "./Task.module.css";
import Button from "./Button";

function Task({ name, id, isNew, isCompleted, onNameChange, onDelete, onCompletedChange }) {
  const [isEditing, setIsEditing] = useState(isNew);
  const [tempName, setTempName] = useState(name);

  function changeNameHandler(ev) {
    setTempName(ev.target.value);
  }

  function editHandler() {
    setIsEditing((prev) => !prev);
  }

  function deleteHandler() {
    onDelete(id);
  }

  function saveHandler() {
    onNameChange(id, tempName);
    setIsEditing(false);
  }

  function cancelHandler() {
    if (isNew) {
      onDelete(id);
      return;
    }

    setTempName(name);
    setIsEditing(false);
  }

  function completedChangeHandler() {
    onCompletedChange(id);
  }

  return (
    <div className={`${classes.task} ${isCompleted ? classes.completedTask : ""}`}>
      <input
        type="checkbox"
        checked={isCompleted}
        className={classes.completedInput}
        onChange={completedChangeHandler}
      />
      {isEditing ? (
        <input placeholder={name} autoFocus onChange={changeNameHandler} value={tempName} />
      ) : (
        <div className={classes.name}>{name}</div>
      )}
      <div className={classes.actions}>
        {isEditing ? (
          <>
            <Button onClick={saveHandler}>Save</Button>
            <Button onClick={cancelHandler}>Cancel</Button>
          </>
        ) : (
          <>
            <IconButton onClick={editHandler}>✏️</IconButton>
            <IconButton onClick={deleteHandler}>🗑️</IconButton>
          </>
        )}
      </div>
    </div>
  );
}

export default Task;
