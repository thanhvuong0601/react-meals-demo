import classes from './Cart.module.css'
import Modal from '../Modal/Modal'
import { CartContext } from '../../Store/CartContext'
import { useContext } from 'react'
import CartItem from './CartItem'

const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    const handlerOrder = () => {
        props.onOrder()
        cartCtx.resetCart()

    }

    return (<>
        {cartCtx.items.length === 0
        ?
            <Modal>
                <div className={classes.notify}>
                    <div className={classes.img}>
                        <img src ="https://salt.tikicdn.com/desktop/img/mascot@2x.png" />   
                    </div>
                    <span className="">No item in your cart.</span>
                    <button onClick = {props.onCloseCart}>Continue shopping</button>
                </div>  
            </Modal>
        :
            <Modal>
                <table className={classes['cart-items']}>
                    <caption>Shoping Cart</caption>
                    <thead>
                        <tr className= {classes['cart-item']}>
                            <th>Item name</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CartItem />
                    </tbody>
                    <tfoot>
                        <tr className={classes.total}>
                            <td colSpan="2">Total amount:</td>
                            <td>{cartCtx.totalAmount.toFixed(2)}$</td>
                        </tr>
                    </tfoot>
                </table>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick = {props.onCloseCart}>Close</button>
                    <button className={classes.button} onClick = {handlerOrder}>Order</button>
                </div>
            </Modal>
        }
    </> 
    )
}
export default Cart