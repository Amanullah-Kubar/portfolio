import React from 'react'
import './buttonLabel.css';

export default function ButtonLabel(props) {
    return (
        <div className="contactLabel">
            <h1>{props.title}</h1>
        </div>
    )
}
