import  { useState } from 'react'

const Timer = () => {
    const [time, setTime]=useState({hr:0, min:0, sec:0, mili:0});
    const [status, setStatus]=useState()

    let updtHr=time.hr;
    let updtMin=time.min;
    let updtSec=time.sec;
    let updtMili=time.mili;

    const start= ()=>{
        myFun();
        setStatus(setInterval(myFun, 10))
    }

   const stop=()=>{
    clearInterval(status)

   }

   const reset=()=>{
    clearInterval(status);
    setTime({hr:0, min:0, sec:0, mili:0})
   }

    const myFun =()=>{
        if(updtMili===100){
            updtMili=0;
            updtSec++
        }
        if(updtSec===60){
            updtSec=0;
            updtMin++;
        }
        if(updtMin===60){
            updtMin=0;
           updtHr++;
        }
        updtMili++;
        return setTime({hr:updtHr, min:updtMin, sec:updtSec, mili:updtMili})
    }
  return (
    <div>
        <h1>StopWatch</h1><br /><br />
        <h1>{time.hr+" : "+time.min+" : "+time.sec+" : "+time.mili}</h1>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Timer