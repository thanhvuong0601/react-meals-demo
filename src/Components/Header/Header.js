import classes from './Header.module.css'
import Button  from '../Button/Button'

const Header = (props) => {
    return (
        <>
            <div className={classes.header}>
                <h1>React Meals</h1>
                <Button onClick = {props.onShowCart} />
            </div>
            <div className={classes['main-image']}>
                <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" />
            </div>
        </>
    )

}
export default Header