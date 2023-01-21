import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import mainImage from "../../images/meals.jpg";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton cartHandler={props.cartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mainImage} alt="table of food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
