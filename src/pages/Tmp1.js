import { useState } from "react";

function Tmp1() {
    const [count, setCount] = useState(0);
    return (
        <div className="container">
            {console.log("render tmp1")}
            <button
                type="button"
                className="btn btn-info"
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                -
            </button>
            <span>{count}</span>
            <button
                type="button"
                className="btn btn-info"
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                +
            </button>
        </div>
    );
}

export default Tmp1;
