import { useState, useEffect, useContext } from "react";
import { ReactComponent as Historyico } from './icon/history.svg'
import { DataContext } from "./store/provider";

function Calculate(){

    const [view, input, result, error, history, setView, setInput, setResult, setError, setHistory, blur, setBlur, save, setSave, historyList, setHistoryList] = useContext(DataContext)
    const [showError, setShowError] = useState('')

    useEffect(() => {
        if (error){
            setShowError('Error')
        } else {
            setShowError('')
        }
    }, [error])

// History handle
    useEffect(() => {

        if(save){
            // TODO Save to local storage
            const jsonHistory = JSON.stringify(history)
            localStorage.setItem('historyList', jsonHistory)
            // TODO Save to local storage

            setSave(false)
        }
    }, [save])
// History handle
    
    
    useEffect(()=> {
        const toggleHistory = (e) => {
            if(e.target.className === 'history-show'){
                setHistoryList(JSON.parse(localStorage.getItem('historyList')))
                setSave(true)
                setView(!view)
                setBlur(!view)                  
            }
        }

        window.addEventListener('click', toggleHistory)

        return () => {
            window.removeEventListener('click', toggleHistory)
        }

    }, [view])

    return(
        <div className="heading">
            <div className="title">
                <p> Calculator </p>
                <div className="history-show">

                    <Historyico  />
                </div>
            </div>
            <div className="screen">
                <p className="error-field"> {showError} </p>
                <div className="number-container"> 
                    <p className="showField">
                        {input}
                    </p> 
                </div>
                <div className="number-container"> 
                    <p className="result">
                        {result}
                    </p> 
                </div>
            </div>
        </div>
    )
}

export default Calculate;