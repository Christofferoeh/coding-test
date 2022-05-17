import React, {useState} from "react"
import Child from "./Child";

const Parent = () => {
    const [value, setValue] = useState(0);

    return (
        <>
            <h2>Parent {value}</h2>
            <Child/>
        </>
    )
}

export default Parent;