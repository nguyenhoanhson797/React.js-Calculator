import { ReactComponent as DeleteAll } from '../../../../icon/delete.svg'
import styles from './DeleteAllButton.module.css'
import {useState, useEffect} from 'react'

function DeleteAllButton({setShowPopup, setPopupType}){

    // TODO Delete all history
    const handleTrash = () => {
        setShowPopup(true)
        setPopupType('deleteAllPopup')
    }

    return(
        <div className={styles.trash} onClick={handleTrash}>
            <DeleteAll/>
        </div>
    )
}

export default DeleteAllButton;