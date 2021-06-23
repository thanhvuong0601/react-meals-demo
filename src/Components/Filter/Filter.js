import classes from './Filter.module.css'
import { useContext, useRef} from 'react'

const Filter = (props) => {
    const resultSelected = useRef('--Select option--')
    const handlerSelected = (value) => {
      switch (value) {
        case 0:
            resultSelected.current.innerHTML = 'All'
            props.onSort(value)
              break;
        case 1:
            resultSelected.current.innerHTML = 'A -> Z'
            props.onSort(value)
              break;
        case 2:
            resultSelected.current.innerHTML = 'Z -> A'
            props.onSort(value) 
              break;
        case 3:
            resultSelected.current.innerHTML = 'Smallest -> Largest'
            props.onSort(value) 
            break;
        case 4:
            resultSelected.current.innerHTML = 'Largest -> Smallest'
            props.onSort(value) 
            break;
        default:  
            break;
      }
    }

    return (
        <div className = {classes.sort}>
            <label htmlFor='sort-chb'> 
            <div className = {classes['sort-options']}>
            Sort: &nbsp;
                <input id = 'sort-chb'type="checkbox" hidden />
                <div className = {classes['sort-text']}>
                    <span ref= {resultSelected}>--Select option--</span>
                    <i className="fas fa-sort-down"></i>
                </div>
                <div className = {classes['sort-item']}>
                    <span onClick = {() => handlerSelected(0)} ><i className="fas fa-sort-alpha-up"></i>All</span>
                    <span onClick = {() => handlerSelected(1)} ><i className="fas fa-sort-alpha-up"></i>A-Z</span>
                    <span onClick = {() => handlerSelected(2)}><i className="fas fa-sort-alpha-down-alt"></i>Z-A</span>
                    <span onClick = {() => handlerSelected(3)}><i className="fas fa-sort-amount-down-alt"></i>Largest-Smallest</span>
                    <span onClick = {() => handlerSelected(4)}><i className="fas fa-sort-amount-up"></i>Smallest-Largest</span>
   
                </div>
            </div>
            </label>
        </div>
    )

}
export default Filter