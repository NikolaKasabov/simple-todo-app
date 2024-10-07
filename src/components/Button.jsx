import classes from './Button.module.css';

function Button({ children, onClick }) {
  return <button className={classes.btn} onClick={onClick}>{children}</button>
}

export default Button;
