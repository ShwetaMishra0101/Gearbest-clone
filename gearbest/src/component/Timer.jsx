import React, { useEffect ,useState} from 'react';

const Timer = () => {
    const [hour,setHour] = useState(35)
    const [min,setMin] = useState(60);
    const [seconds, setSecond] = useState(60);

    var timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSecond(seconds - 1);
            if (seconds === 0) {
                setSecond(59);
            }
        }, 1000);

      
        
        return () => clearInterval(timer);
    });
    return (
        <div>
            <h1>Timer</h1>
            <h2>Second:{seconds}</h2>
            {/* <h2>{min}</h2> */}
        </div>
    )
}



export default Timer;