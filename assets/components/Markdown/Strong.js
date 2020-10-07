import React from 'react'

export default function Strong({children}) {
    // console.log()
    return (
        <strong
        style={{
            fontWeight:'bold',
            fontSize:'1.2em'
        }}
        >
            {children[0].props.value}
        </strong>
    )
}
