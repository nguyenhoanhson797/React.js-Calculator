// import { useState, useEffect, useRef } from "react";
import { ReactComponent as Clear1 } from '../../icon/clear1.svg'
import { ReactComponent as Equal } from '../../icon/equals.svg'
import { ReactComponent as Plus } from '../../icon/plus.svg'
import { ReactComponent as Minus } from '../../icon/minus.svg'
import { ReactComponent as Multiply } from '../../icon/multi.svg'
import { ReactComponent as Divide } from '../../icon/divide.svg'
import styles from './Keyboard.module.css'
import { useState, useEffect, useRef } from 'react'


function Keyboard({ input, setInput, result, setResult, error, setError, show, setShow, save, setSave, setHistory, history, setHistoryList, focus, setFocus }) {
    const [newInput, setNewInput] = useState(false);
    
    // TODO Calculate handle
    const handleClick = (e) => {
        
        switch(true){
            case e.target.getAttribute('btntype') === 'number':
                if (newInput){
                    setInput([input.splice(0,1)])
                    setNewInput(false)
                    setHistory(checkResult ? history : [...history, {result: result.toString(), note: ''}])
                    setSave(true)
                }
                if (error){
                    setInput([])
                    setError(false)
                }
                setInput([...input, e.target.value].join(''))
                break;

            case e.target.getAttribute('btntype') === 'cal':
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
                    setHistory(checkResult ? history : [...history, {result: result.toString(), note: ''}])
                    setSave(true)
                    setResult(0)
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
                setHistory(checkResult ? history : [...history, {result: result.toString(), note: ''}])
                setSave(true)
                break;

            case e.target.id === 'equal':
                setResult(eval(input));
                setInput([input.toString()])
                setNewInput(true)
                break;
        }
    }
    // TODO Calculate handle

    // Check if the result is valid
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

    // TODO History handle
    useEffect(() => {
        if(save){
            // TODO Save to local storage
            const jsonHistory = JSON.stringify(history)
            localStorage.setItem('historyList', jsonHistory)
            // TODO Save to local storage

            setSave(false)
        }
    }, [save])
    // TODO History handle

    // TODO Key pressed handle
    // Focus for key press
    const ref = useRef()
    useEffect(() => {
        ref.current.focus()
        setFocus(true)

        const keypressListener = e => {
            if (e.target.nodeName === 'INPUT'){        
            } else {
                ref.current.focus()
                setFocus(true)
            }
        }

        window.addEventListener('click', keypressListener)

        return () => {
            window.removeEventListener('click', keypressListener)
        }
    } ,[focus])

    // Logic handle
    const handleKeyPressed = e => {
        const numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
        const calMethodArray = ['+', '-', '*', '/']
        setFocus(true)

        // * Press Enter to calculate (equal)
        if (e.key === 'Enter') {
            setResult(eval(input));
            setInput([input.toString()])
            setNewInput(true)
        }

        // * Press number
        if(numberArray.includes(e.key)){
            if (newInput){
                setInput([input.splice(0,1)])
                setNewInput(false)
                setHistory(checkResult ? history : [...history, {result: result.toString(), note: ''}])
                setSave(true)
            }
            if (error){
                setInput([])
                setError(false)
            }
            setInput([...input, e.key].join(''))
        }
        
        // * Press calculate method
        if(calMethodArray.includes(e.key)){
            if (newInput){
                setInput([result, e.key].join(''))
            } else {
                setInput([...input, e.key].join(''))
            }
            setNewInput(false)
        }

        //* Press Backspace to delete 1 character 
        if(e.key === 'Backspace'){
            if (!newInput){
                setInput(input.slice(0, input.length - 1))
                setError(false)
            } else {
                setNewInput(false)
                setInput([])
                setHistory(checkResult ? history : [...history, {result: result.toString(), note: ''}])
                setSave(true)
                setResult(0)
            }
        }

        //* Press Delete to clean all and forward previous result
        if(e.key === 'Delete'){
            setInput([result])
            setError(false)
        }

        //* Press Esc to return from history
        if(e.key === 'Escape'){
            setShow(false)
        }

        //* Press H to toggle history
        if(e.key === 'h'){
            setHistoryList(JSON.parse(localStorage.getItem('historyList')))
            setSave(true)
            setShow(!show)
        }

        //* Press R to Reset
        if(e.key === 'r'){
            setNewInput(false)
            setInput([])
            setResult(0)
            setError(false)
            setHistory(checkResult ? history : [...history, {result: result.toString(), note: ''}])
            setSave(true)
        }
    }
    // Logic handle
    // TODO Key pressed handle
 

    return (
        <div ref={ref} className={styles.keyboard} onClick={handleClick} onKeyDown={handleKeyPressed} tabIndex={0}>
            <div className={styles.row}>
                <button id="reset"> Reset </button>
                <button id="clean"> C </button>
                <button id="clear1" className={styles.default}> <Clear1/> </button>
                <button className={styles.cal} btntype='cal' value={'+'}> <Plus/> </button>
            </div>
            <div className={styles.row}>
                <button className={styles.number} btntype='number' value={'7'}> 7 </button>
                <button className={styles.number} btntype='number' value={'8'}> 8 </button>
                <button className={styles.number} btntype='number' value={'9'}> 9 </button>
                <button className={styles.cal} btntype='cal' value={'-'}> <Minus/> </button>
            </div>
            <div className={styles.row}>
                <button className={styles.number} btntype='number' value={'4'}> 4 </button>
                <button className={styles.number} btntype='number' value={'5'}> 5 </button>
                <button className={styles.number} btntype='number' value={'6'}> 6 </button>
                <button className={styles.cal} btntype='cal' value={'*'}> <Multiply/> </button>
            </div>
            <div className={styles.row}>
                <button className={styles.number} btntype='number' value={'1'}> 1 </button>
                <button className={styles.number} btntype='number' value={'2'}> 2 </button>
                <button className={styles.number} btntype='number' value={'3'}> 3 </button>
                <button className={styles.cal} btntype='cal' value={'/'}> <Divide/> </button>
            </div>
            <div className={styles.row}>
                <button className={styles.number} btntype='number' value={'.'}> . </button>
                <button className={styles.number} btntype='number' value={'00'}> 00 </button>
                <button className={styles.number} btntype='number' value={'0'}> 0 </button>
                <button id="equal" className={styles.primary}> <Equal/> </button>
            </div>
        </div>
    )
}

export default Keyboard;