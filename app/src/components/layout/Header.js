import React from 'react'

export default function Header(props) {
    return (
        <header style={headerStyle}>
            <h1>Todo App {props.app_version}</h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}