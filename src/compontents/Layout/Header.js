import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import "./header.css"

const Header = props => {
  return <Fragment>
    <header className={classes['header']}>
      <h1>HUNGRY HUB!!</h1>
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt="A table full of tasty food" />
    </div>
  </Fragment>
};

export default Header;
