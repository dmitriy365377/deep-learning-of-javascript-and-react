import React from 'react'
import './App.css';

const TextArea = () => {
    return (
        <div className='textArea-container'>
            <div className='texArea-title'>Сообщение руководителю</div>
            <textarea className='textForm'></textarea>
        </div>
    )
}

export { TextArea }