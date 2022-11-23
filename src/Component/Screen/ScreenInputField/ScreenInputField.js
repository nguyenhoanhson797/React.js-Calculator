import styles from './ScreenInputField.module.css'

function ScreenInput({input}){

    return(
        <div className={styles.numberContainer}> 
            <p className={styles.showField}>
                {input}
            </p>
        </div>
    )
}

export default ScreenInput;