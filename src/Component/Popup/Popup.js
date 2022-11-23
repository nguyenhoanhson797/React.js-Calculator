import styles from './Popup.module.css'
import EditPopup from './PopupType/EditPopup';
import ConfirmPopup from './PopupType/ConfirmPopup';

function Popup({ history, setHistoryList, showPopup, popupType, show, setShowPopup, setSave, itemIndex, setFocus, setHistory }){
    

    return(
        <div className={`${styles.popup} ${show && showPopup ? styles.show : styles.hide}`}>
            <EditPopup
                popupType={popupType}
                setShowPopup={setShowPopup}
                history={history}
                setHistoryList={setHistoryList}
                setSave={setSave}
                itemIndex={itemIndex}
                setFocus={setFocus}
            />
            <ConfirmPopup
                popupType={popupType}
                setShowPopup={setShowPopup}
                history={history}
                setHistoryList={setHistoryList}
                setSave={setSave}
                itemIndex={itemIndex}
                setFocus={setFocus}
                setHistory={setHistory}
            />
        </div>
    )
}

export default Popup;