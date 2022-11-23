import { useState } from 'react';
import { createContext } from "react";

const DataContext = createContext()

const getLocalItems = () => {
    const storageHistoryList = JSON.parse(localStorage.getItem('historyList'));
    return storageHistoryList || [];
}

function DataProvider({ children }) {

    const [view, setView] = useState(false);
    const [input, setInput] = useState([]);
    const [result, setResult] = useState(0);
    const [error, setError] = useState(false);
    const [blur, setBlur] = useState(false)
    const [save, setSave] = useState(false)
    const [history, setHistory] = useState( getLocalItems())
    const [historyList, setHistoryList] = useState(getLocalItems())
    

    const data = [view, input, result, error, history, setView, setInput, setResult, setError, setHistory, blur, setBlur, save, setSave, historyList, setHistoryList]
    

    return(
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
export { DataContext };