import styles from './BlurLayout.module.css'

function BlurLayout({ show }){


    return(
        // <div className={`${styles.BlurLayout} ${blur ? 'show' : 'hide'}`}></div>
        <div className={`${styles.blurLayout} ${show ? styles.show : styles.hide}`}></div>
    )
}

export default BlurLayout;