import {ReactComponent as Edit} from '../../../../icon/edit.svg'

function HistoryEditButton ({ index, setShowPopup, setPopupType, setItemIndex }) {

    // TODO Send edit history item event
    const handleEdit = e => {
        setShowPopup(true)
        setPopupType('editPopup')
        setItemIndex(e.target.id.substr(4))
    }
    // TODO Send edit history item event

    return(
        <div id={`edit${index}`} onClick={handleEdit}  className='editButton'> <Edit/> </div>
    )
}

export default HistoryEditButton