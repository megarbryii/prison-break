import React from 'react';

export default function(props) {
    return(
            <li key={props.id}>
                {props.name}
            </li>
    )
}