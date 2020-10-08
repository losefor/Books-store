import React from 'react'
import Link from 'next/link'
import styles from './Book.module.css'

export default function Book({src , href , onClick}) {
    return (
            <img onClick={onClick} className={styles.image} src={src}/>
    )
}

