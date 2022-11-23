import styles from './EditPopup.module.css'
import { useState } from 'react'

function EditPopup({ history, setHistoryList, popupType, setShowPopup, setSave, itemIndex, setFocus }){
    const [editResultValue, setEditResultValue] = useState('')
    const [editNoteValue, setEditNoteValue] = useState('')
    
    // Get Result edit value
    const handleEditResult = e => {
        setEditResultValue(e.target.value);
    }

    // Get Note edit value
    const handleEditNote = e => {
        setEditNoteValue(e.target.value);
    }

    // TODO Handle save edit
    const handleSave = () => {
        console.log(editResultValue);
        if (!isNaN(editResultValue)) {
            if(editResultValue){
                history.splice(itemIndex, 1, {result: editResultValue, note: editNoteValue})
                setHistoryList(history)
                setSave(true)
                setShowPopup(false)
                setFocus(true)
            }
        }
        if(editResultValue === null || editResultValue === undefined || editResultValue === ''){
            if(editNoteValue){
                console.log(history[itemIndex].result);
                console.log(itemIndex);
                history.splice(itemIndex, 1, {result: history[itemIndex].result, note: editNoteValue})
                setHistoryList(history)
                setSave(true)
                setShowPopup(false)
                setFocus(true)
            }
        }
        document.getElementById('editResultInput').value = ''
        document.getElementById('editNoteInput').value = ''
        setEditResultValue('')
        setEditNoteValue('')
    }

    // TODO Handle cancel
    const handleCancel = () => {
        setShowPopup(false)
        setFocus(true)
        document.getElementById('editResultInput').value = ''
        document.getElementById('editNoteInput').value = ''
    }

    return(
        <div className={`${styles.editPopup} ${popupType === 'editPopup' ? styles.show : styles.hide}`}>
            <div className={styles.title}> Edit item </div>
            <input id='editResultInput' className={`${styles.editBox} ${styles.resultBox}`} placeholder='Edit Result' onChange={handleEditResult}/>
            <input id='editNoteInput' className={`${styles.editBox} ${styles.noteBox}`} placeholder='Edit Note' onChange={handleEditNote}/>
            <div className={styles.btnField}>
                <button className={`${styles.button} ${styles.save}`} onClick={handleSave}> Save </button>
                <button className={`${styles.button} ${styles.cancel}`} onClick={handleCancel}> Cancel </button>
            </div>
        </div>
    )
}

export default EditPopup;