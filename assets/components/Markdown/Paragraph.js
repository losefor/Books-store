import React from 'react'

export default function TextMd({children}) {
    console.log(children)
    return (
        <p
        style={{
            color:'#191919',
            fontSize : 18,
            padding:'10px 0'
        }}
        >
            {children[0].props.value}
        </p>
    )
}
