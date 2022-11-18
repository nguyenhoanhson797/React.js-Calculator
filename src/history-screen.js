import { useState, useEffect, useContext } from 'react';
import { ReactComponent as DeleteAll } from './icon/delete.svg'
import { ReactComponent as Edit } from './icon/edit.svg'
import { ReactComponent as Return } from './icon/keyboard-return.svg'
import { ReactComponent as Delete1 } from './icon/backspace.svg'
import { DataContext } from './store/provider.js'

function History(){

    const [view, input, result, error, history, setView, setInput, setResult, setError, setHistory, blur, setBlur, save, setSave, historyList, setHistoryList] = useContext(DataContext)
    

    const closeView = () => {
        setView(false)
        setBlur(false)
        setSave(true)
    }

    useEffect(() => {
        const handleCLick = (e) => {
            
            if (e.target.className === 'trash'){
                setHistory([])
                setHistoryList([])
                setSave(true)
            }

            if (e.target.className === 'editButton'){
                const edit = prompt('Edit this result')
                const index = e.target.id.substr(4)
                console.log(index);

                if (!isNaN(edit)) {
                    // document.querySelector(`.history-item.item-${index}`).innerText = edit
                    history.splice(index, 1, `${edit}`)
                    setHistoryList(history)
                    setSave(true)
                }
            }

            if(e.target.className === 'delete1'){
                const index = e.target.id.substr(6)
                history.splice(index, 1)
                setHistoryList(history)
                setSave(true)
            }
        }

        window.addEventListener('click', handleCLick)

        return () => {
            window.removeEventListener('click', handleCLick)
        }
    }, [history]) // for edit

    
// History handle
    useEffect(() => {
        if(save){
            // TODO Save to local storage
            const jsonHistory = JSON.stringify(history)
            localStorage.setItem('historyList', jsonHistory)
            // TODO Save to local storage
            setSave(false)
        }
    })
// History handle

    return (
        <div className={`history-field ${view ? 'show' : 'hide'}`}>
            <div className='history-header'>
                <div className='left' style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                    <div className='return' style={{height: '20px'}} onClick={closeView}>
                        <Return/>
                    </div>
                    <p> History </p>
                </div>
                <div className='trash'>
                    <DeleteAll/>
                </div>
            </div>

            <div className='history-list'>
                <ul>
                    {
                        historyList.map((value, index) => {
                            return (
                                <li className='itemList' key={index} id={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}>
                                    <div className='historyList-left'>
                                        <p className={`history-item item-${index}`}> {value} </p>
                                        <div>
                                            <p style={{marginRight: '4px'}}>Note: </p>
                                            <input className={`note${index}`}/>
                                        </div>
                                    </div>

                                    <div className='historyList-right' style={{display: 'flex', gap: '8px'}}>
                                        <div id={`edit${index}`} className='editButton'> <Edit/> </div>
                                        <div id={`delete${index}`} className='delete1'><Delete1/></div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}

export default History;