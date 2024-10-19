import { useEffect, useRef } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown"

/* const Counter = ({props}) => <span>{props.seconds} </span> */

interface Props{
    start:boolean;
    setStart:(value: boolean)=>void;
    setSave:(value: boolean)=>void;
}

const Counter:React.FC<CountdownRenderProps>  = ({seconds}) => <span>{seconds === 0 ? 60:seconds} </span>

const Timer:React.FC<Props> = ({start, setStart, setSave}) => {

    const timeRef = useRef<Countdown|null>(null);

    const handleEnd = ()=>{
        console.log('timer end');
        setStart(false)
        setSave(true)

    }

    useEffect(()=>{
        if(start && timeRef.current){
            timeRef.current.start()
        }

    },[start])

  return (
    <div className="timer">
        <h3>
        <Countdown
            date = {Date.now() + 60000}
            renderer={(props) => <Counter {...props} />}
            onComplete={handleEnd}
            autoStart={false}
            ref={timeRef}
        >
        </Countdown>
        Sec </h3>
    </div>
  )
}

export default Timer
