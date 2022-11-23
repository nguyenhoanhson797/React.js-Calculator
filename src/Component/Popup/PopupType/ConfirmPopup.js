import styles from './ConfirmPopup.module.css'

function ConfirmPopup({ history, setHistoryList, popupType, setShowPopup, setSave, itemIndex, setFocus, setHistory }){

    // TODO handle delete 1 item
    const handleDeleteOneItem = () => {
        history.splice(itemIndex, 1)
        setHistoryList(history)
        setSave(true)
        setFocus(true)
        setShowPopup(false)
    }
    
    // TODO handle delete all items
    const handleDeleteAll = () => {
        setHistory([])
        setHistoryList([])
        setSave(true)
        setFocus(true)
        setShowPopup(false)
    }
    
    // TODO handle cancel
    const handleCancel = () => {
        setShowPopup(false)
    }

    

    return(
        <div>
            <div className={`${styles.confirmPopup} ${popupType === 'confirmPopup' ? styles.show : styles.hide}`}>
                <div className={styles.title}> Delete this item? </div>
                <div className={styles.confirmField}>
                    <button className={`${styles.button} ${styles.delete}`} btntype="delete" onClick={handleDeleteOneItem}> Delete </button>
                    <button className={`${styles.button} ${styles.cancel}`} btntype="cancel" onClick={handleCancel}> Cancel </button>
                </div>
            </div>

            <div className={`${styles.confirmPopup} ${popupType === 'deleteAllPopup' ? styles.show : styles.hide}`}>
                <div className={styles.title}> Delete All Items? </div>
                <div className={styles.confirmField}>
                    <button className={`${styles.button} ${styles.delete}`} btntype="delete" onClick={handleDeleteAll}> Delete All </button>
                    <button className={`${styles.button} ${styles.cancel}`} btntype="cancel" onClick={handleCancel}> Cancel </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmPopup;