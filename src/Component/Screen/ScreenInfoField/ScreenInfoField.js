// import { useState, useEffect } from "react";
import styles from './ScreenInfoField.module.css'
import { useState, useEffect } from 'react'

function ScreenInfo({error}){
    const [showError, setShowError] = useState('')

    // ! Error handle
    useEffect(() => {
        if (error){
            setShowError('Error')
        } else {
            setShowError('')
        }
    }, [error])
    // ! Error handle

    return(
        <div className="screenInfo">
            <p className={styles.errorField}> {showError} </p>
        </div>
    )
}

export default ScreenInfo;