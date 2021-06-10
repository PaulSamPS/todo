import React from 'react'
import './app-header.scss'

const AppHeader = ( { toDo, done } ) => {
    return (
        <div className='app-header d-flex'>
            <h1>Список дел</h1>
            <h2>{ toDo } активных, { done } завершенные</h2>
        </div>
    )
}

export default AppHeader