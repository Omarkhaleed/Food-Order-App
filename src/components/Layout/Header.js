import { Fragment } from "react";
import mealImage from "../../Assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = props => {

   return (

    <Fragment>

       <header className={classes.header}>
         <h1>React Meals</h1>
         <HeaderCartButton  onClick={props.onShowCart}></HeaderCartButton>
       </header>

        <div className={classes['main-image']}>
            <img src={mealImage} alt=" A table of food"></img>
        </div>

    </Fragment>
)};


export default Header;