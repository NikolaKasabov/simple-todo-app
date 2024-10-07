import classes from "./TasksContainer.module.css";

function TasksContainer({ children }) {
  return <div className={classes.container}>{children}</div>;
}

export default TasksContainer;
