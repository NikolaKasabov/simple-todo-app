import classes from "./Header.module.css";

function Header({ children }) {
  return <h1 className={classes.title}>{children}</h1>;
}

export default Header;
