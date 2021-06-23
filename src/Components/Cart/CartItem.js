import { CartContext } from '../../Store/CartContext'
import { useContext } from 'react'
import classes from './CartItem.module.css'
import ButtonQty from '../Button/ButtonQty'
const CartItem = (props) => {
    const cartCtx = useContext(CartContext)
    return  <>
            {
               cartCtx.items.map(item => {
                   return <tr key= {item.id} className= {classes['cart-item']}>
                       <td>
                           <p>{item.name}</p>
                           <button className={classes.btn} onClick = {() => cartCtx.removeItem(item.id)} >Delete</button>
                        </td>
                       <td><ButtonQty  item= {item}/></td>
                       <td>{(item.price*item.quantity).toFixed(2)}</td>
                   </tr>
               })
           }
        </>
    
}
export default CartItem