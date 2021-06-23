import ReactDOM from 'react-dom'
import classes from './OrderSuccess.module.css'
const OrderSucccess = (props) => {
    
    return(
        ReactDOM.createPortal(   
            <div className={classes.backdrop}>
                <div className={classes.modal}>
                    <div className={classes.order}>
                        <div className={classes.icon}>
                            <i className={classes.checkmark}>✓</i>
                        </div>
                        <h1>Success</h1> 
                        <p>We received your purchase request;<br/> we'll be in touch shortly!</p>
                        <button className={classes.shopping} onClick={props.onClose}>CONTINUE SHOPING</button>
                    </div>
                </div>
            </div>,
             document.getElementById('result')
        )
    )
}
export default OrderSucccess