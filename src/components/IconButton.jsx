import classes from "./IconButton.module.css";

function IconButton({ children, onClick }) {
  return (
    <button className={classes.iconBtn} onClick={onClick}>
      {children}
    </button>
  );
}

export default IconButton;
