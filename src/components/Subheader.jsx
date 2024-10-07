import classes from "./Subheader.module.css";

function Subheader({ children }) {
  return <p className={classes.subtitle}>{children}</p>;
}

export default Subheader;
