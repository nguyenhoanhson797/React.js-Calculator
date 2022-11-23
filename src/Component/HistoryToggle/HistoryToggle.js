import styles from './HistoryToggle.module.css'
import { ReactComponent as Historyico } from '../../icon/history.svg'


function HistoryToggle({ show, setShow, setSave, setHistoryList, setFocus }){

    const toggleHistory = () => {
        setHistoryList(JSON.parse(localStorage.getItem('historyList')))
        setSave(true)
        setShow(!show)
        setFocus(true)
    }

    return(
        <div className={styles.historyShow} onClick={toggleHistory}>
            <Historyico />
        </div>
    )
}

export default HistoryToggle;