import classes from './ButtonAddToCart.module.css'
import { CartContext } from '../../Store/CartContext'
import { useContext } from 'react'
const ButtonAddToCart = (props) => {
    const cartCtx = useContext(CartContext)
    return (
        <button className={classes.button}  onClick = {() => cartCtx.addItem(props.data)}> <span>Add to cart</span></button>
    )
}
export default ButtonAddToCart