import { useContext } from 'react';
import './App.css';
import Calculate from './calculate-screen';
import Keyboard from './keyboard'
import History from './history-screen'
import { DataContext } from './store/provider'

function App() {
  
  const [view, input, result, error, history, setView, setInput, setResult, setError, setHistory, blur, setBlur, save, setSave] = useContext(DataContext)


  return (
      <div className='main-container'>
        <div className={`blur-layout ${blur ? 'show' : 'hide'}`}></div>
        <Calculate />
        <Keyboard />
        <History />
      </div>
  )
}


export default App;
