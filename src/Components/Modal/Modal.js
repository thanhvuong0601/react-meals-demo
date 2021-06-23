import classes from './Modal.module.css'

import ReactDOM from 'react-dom'

const Modal = (props) => {
    return (
       ReactDOM.createPortal(
            <div className={classes.backdrop}>
                <div className={classes.modal}>
                    {props.children}
                </div>
            </div>,
            document.getElementById('overlay')
        )
        
    )
}
export default Modal