import './App.css';
import Screen from './Component/Screen/Screen';
import Keyboard from './Component/Keyboard/Keyboard';
import Header from './Component/Header/Header';
import BlurLayout from './Component/BlurLayout/BlurLayout';
import History from './Component/History/History';
import HistoryToggle from './Component/HistoryToggle/HistoryToggle';
import Popup from './Component/Popup/Popup';
import { useState, useEffect } from 'react'

function App() {
  
  const getLocalItems = () => {
    const storageHistoryList = JSON.parse(localStorage.getItem('historyList'));
    return storageHistoryList || [];
  }
  
  const [show, setShow] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [popupType, setPopupType] = useState('')
  const [input, setInput] = useState([])
  const [result, setResult] = useState(0);
  const [error, setError] = useState(false);
  const [save, setSave] = useState(false);
  const [history, setHistory] = useState( getLocalItems() );
  const [historyList, setHistoryList] = useState(getLocalItems() );
  const [focus, setFocus] = useState(false)
  const [itemIndex, setItemIndex] = useState()

  //Keep focus state active for keypress
  useEffect(() => {
    setFocus(false)
  }, [focus])

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

  console.log(itemIndex);

  return (
      <div className='main-container'>
        <HistoryToggle 
          show={show}
          setShow={setShow}
          setSave={setSave}
          setHistoryList={setHistoryList}
          setFocus={setFocus}
        />

        <div className='top'>
          <Header />
          <Screen 
            input={input}
            result={result}
            error={error}
          />
        </div>

        <Keyboard
          save={save}
          setSave={setSave}
          input={input}
          setInput={setInput}
          result={result}
          setResult={setResult}
          error={error}
          setError={setError}
          show={show}
          setShow={setShow}
          history={history}
          setHistory={setHistory}
          setHistoryList={setHistoryList}
          focus={focus}
          setFocus={setFocus}
        />

        <BlurLayout 
          show={show}
        />

        <Popup 
          showPopup={showPopup}
          popupType={popupType}
          show={show}
          setPopupType={setPopupType}
          setShowPopup={setShowPopup}
          history={history}
          setHistoryList={setHistoryList}
          setSave={setSave}
          itemIndex={itemIndex}
          setFocus={setFocus}
          setHistory={setHistory}
        />

        <History
          show={show}
          setShow={setShow}
          historyList={historyList}
          setFocus={setFocus}
          setShowPopup={setShowPopup}
          setPopupType={setPopupType}
          showPopup={showPopup}
          itemIndex={itemIndex}
          setItemIndex={setItemIndex}
        />
      </div>
  )
}


export default App;
