import { ReactComponent as Return } from '../../../../icon/keyboard-return.svg'
import styles from './ReturnButton.module.css'

function ReturnButton({setShow, setFocus}){

    const closeView = () => {
        setShow(false)
        setFocus(true)
    }

    return(
        <div className={styles.return} onClick={closeView}>
            <Return/>
        </div>
    )
}

export default ReturnButton;