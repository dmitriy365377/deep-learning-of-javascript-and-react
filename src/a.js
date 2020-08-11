import React, { useState } from 'react'
import B from './b.js'


const A = () => {
    const [state, setState] = useState(false)
    return (
        <div>
            <button onClick={() => setState((prevState) => !prevState)}>show component B</button>
            {state && <B />}

        </div>
    )
}

export default A

