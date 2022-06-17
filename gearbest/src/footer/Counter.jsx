import React,{useState} from 'react';


const Counter = () => {
    const [count,setCount] = useState(0)
    return <div>
        <button onClick={()=>setCount(count+1)}>+</button><label htmlFor="">{count}</label>
        <button disabled={count<1} onClick={()=>setCount(count-1)}>-</button>
    </div>;
}

export default Counter;