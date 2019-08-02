import React from 'react';

function Button(props) {
    if (props.href) {
        return (
        <button className='btn btn-outline-dark btn-sm btn-block'>
            <a href={props.href}>{props.children}</a>
        </button>
        )
    }
    else if (props.onClick) {
        return (
            <button 
            className='btn btn-primary btn-sm btn-block'
            onClick={props.onClick}
            data-id={props.id} 
            >
            {props.children}
        </button>
        )
    }

}

export default Button;