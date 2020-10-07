import React from 'react'
import styles from './Book.module.css'
import View from './View'
export default function Book({src}) {
    return (
        

            <img className={styles.image} src={src}/>
        
    )
}

