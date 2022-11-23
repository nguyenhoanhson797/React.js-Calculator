import styles from "./History.module.css";
import HistoryHeader from "./HistoryHeader/HistoryHeader"
import HistoryList from "./HistoryList/HistoryList"

function History({ setItemIndex, show, setShow, historyList, setFocus, showPopup, setShowPopup, setPopupType }){


    return(
        <div
            className={`
                ${styles.historyField}
                ${show ? styles.show : styles.hide}
                ${show && showPopup ? styles.popup : ''}
            `}
            fieldtype='history'
        >
            <HistoryHeader
                setShow={setShow}
                setFocus={setFocus}
                setShowPopup={setShowPopup}
                setPopupType={setPopupType}
            />
            <HistoryList
                historyList={historyList}
                setShowPopup={setShowPopup}
                setPopupType={setPopupType}
                setItemIndex={setItemIndex}
                showPopup={showPopup}
            />
        </div>
    )
}

export default History;