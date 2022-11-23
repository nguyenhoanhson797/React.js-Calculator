import styles from './Header.module.css'
    
    
    
    
function Heading () {

    // // TODO show/hide History list 
    // const toggleHistory = () => {
    //     setHistoryList(JSON.parse(localStorage.getItem('historyList')))
    //     setSave(true)
    //     setView(!view)
    //     setBlur(!view)
    // }
    // // TODO show/hide History list

    const toggleHistory = () => {

    }

    return(
        <div className={styles.heading}>      
            <div className={styles.title}>
                <p> Calculator </p>
            </div>
        </div>
    )
}

export default Heading;