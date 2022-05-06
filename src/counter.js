import React,{useState} from "react"
import OddEven from "./oddeven";

const Counter = (props) => {
    //0에서 출발
    //1씩 증가하고
    //1씩 감소하는
    //state
    const [count,setCount] = useState(0) //변수 2개, 상태변수

    const onIncrease = () => {
        setCount(count + 1);
    };

    const onDecrease = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEven count={count}></OddEven>
        </div>
    )
}

export default Counter;