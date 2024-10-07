import classes from "./Card.module.css";

function Card({ children }) {
  return <div className={classes.wrapper}>{children}</div>;
}

export default Card;
