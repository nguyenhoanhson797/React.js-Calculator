import {ReactComponent as Delete1} from '../../../../icon/backspace.svg'

function HistoryDeleteOneItem ({ index, setShowPopup, setPopupType, setItemIndex }) {

    // TODO Send delete 1 history item event
    const handleDelete1 = (e) => {
        setShowPopup(true)
        setPopupType('confirmPopup')
        setItemIndex(e.target.id.substr(6))
    }
    // TODO Send delete 1 history item event

    return(
        <div id={`delete${index}`} onClick={handleDelete1} className='delete1'> <Delete1/> </div>
    )
}

export default HistoryDeleteOneItem