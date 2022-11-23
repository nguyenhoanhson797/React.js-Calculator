import { useState, useEffect, useContext } from "react";
import { ReactComponent as Historyico } from './icon/history.svg'
import { DataContext } from "../store/provider";

function Calculate(){

    const [view, input, result, error, history, setView, setInput, setResult, setError, setHistory, blur, setBlur, save, setSave, historyList, setHistoryList] = useContext(DataContext)
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

    // History handle
    useEffect(() => {
        if(save){
            const jsonHistory = JSON.stringify(history)
            localStorage.setItem('historyList', jsonHistory)
            setSave(false)
        }
    }, [save])
    // History handle
    
    // TODO show/hide History list 
    const toggleHistory = () => {
        setHistoryList(JSON.parse(localStorage.getItem('historyList')))
        setSave(true)
        setView(!view)
        setBlur(!view)
    }
    // TODO show/hide History list

    return(
        <div className="heading">

            <div className="title">
                <p> Calculator </p>
                <div className="history-show" onClick={toggleHistory}>
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