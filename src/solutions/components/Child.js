import React from "react"

const Child = ({callbackHandler}) => {
    return (
        <button onClick={() => callbackHandler(prev => prev+1)} type="button">Change parent value</button>
    )
}

export default Child;