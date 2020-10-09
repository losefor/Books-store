import React from 'react'
import styles from './GategoryCard.module.css'

export default function GategoryCard({title , color  , m ,img }) {
    return (
        <div className={styles.cont} style={{boxShadow:`${color} 0 0 20px 0` , margin:m}}>
            <span>{title}</span>
            <div style={{backgroundColor:color}}/>
            <img src={img} />

        </div>
    )
}
