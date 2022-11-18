import { useState, useEffect, useContext } from "react";
import { ReactComponent as Clear1 } from './icon/clear1.svg'
import { ReactComponent as Equal } from './icon/equals.svg'
import { ReactComponent as Plus } from './icon/plus.svg'
import { ReactComponent as Minus } from './icon/minus.svg'
import { ReactComponent as Multiply } from './icon/multi.svg'
import { ReactComponent as Divide } from './icon/divide.svg'
import { DataContext } from "./store/provider";
import { type } from "@testing-library/user-event/dist/type";


function Keyboard() {

    const [view, input, result, error, history, setView, setInput, setResult, setError, setHistory, blur, setBlur, save, setSave, historyList, setHistoryList] = useContext(DataContext);

    const [newInput, setNewInput] = useState(false);
    // const [keyDown, setKeyDown] = useState(false);

// TODO Calculate handle
    const handleClick = (e) => {
        switch(true){
            // 
            case e.target.className.includes('number'):
                if (newInput){
                    setInput([input.splice(0,1)])
                    setNewInput(false)
                    setHistory(checkResult ? history : [...history, result.toString()])
                    console.log('result', result, typeof result);
                    setSave(true)
                }
                if (error){
                    setInput([])
                    setError(false)
                }
                setInput([...input, e.target.value].join(''))
                
                break;

            case e.target.className.includes('cal'):
                if (newInput){
                    setInput([result, e.target.value].join(''))
                } else {
                    setInput([...input, e.target.value].join(''))
                }
            
                setNewInput(false)
                break;

            case e.target.id === 'clear1':
                if (!newInput){
                    setInput(input.slice(0, input.length - 1))
                    setError(false)
                } else {
                    setNewInput(false)
                    setInput([])
                    setResult()
                }
                break;
            
            case e.target.id === 'clean':
                    setInput([result])
                    setError(false)
                break;

            case e.target.id === 'reset':
                setNewInput(false)
                setInput([])
                setResult(0)
                setError(false)
                setHistory(checkResult ? history : [...history, result.toString()])
                setSave(true)
                console.log('result', result, typeof result);
                break;

            case e.target.id === 'equal':
                setResult(eval(input));
                setInput([input.toString()])
                setNewInput(true)
                break;
        }
    }
// TODO Calculate handle
    console.log('result', result, 'type', typeof result);
    const checkResult = (result === 0 || isNaN(result) || result === 'Infinity' || result === Infinity || result === undefined || result === null || typeof result === 'object')

// ! Error Handle
    useEffect(() => {
        const errorHandle = () => {
            setError(true)
        }
        
        window.addEventListener('error', errorHandle)

        return () => {
            window.removeEventListener('error', errorHandle)
        }
    }, [])
// ! Error Handle

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
 

    return (
        <div className="keyboard" onClick={handleClick} >
            <div className="row">
                <button id="reset"> Reset </button>
                <button id="clean"> C </button>
                <button id="clear1" className="default"> <Clear1/> </button>
                <button className="cal" value={'+'}> <Plus/> </button>
            </div>
            <div className="row">
                <button className="number" btn-type="number | clean | clean1" value={'7'}> 7 </button>
                <button className="number" value={'8'}> 8 </button>
                <button className="number" value={'9'}> 9 </button>
                <button className="cal" value={'-'}> <Minus/> </button>
            </div>
            <div className="row">
                <button className="number" value={'4'}> 4 </button>
                <button className="number" value={'5'}> 5 </button>
                <button className="number" value={'6'}> 6 </button>
                <button className="cal" value={'*'}> <Multiply/> </button>
            </div>
            <div className="row">
                <button className="number" value={'1'}> 1 </button>
                <button className="number" value={'2'}> 2 </button>
                <button className="number" value={'3'}> 3 </button>
                <button className="cal" value={'/'}> <Divide/> </button>
            </div>
            <div className="row">
                <button className="number" value={'.'}> . </button>
                <button className="number" value={'00'}> 00 </button>
                <button className="number" value={'0'}> 0 </button>
                <button id="equal" className="primary"> <Equal/> </button>
            </div>
        </div>
    )
}




export default Keyboard;