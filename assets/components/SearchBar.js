import React from 'react'
import styles from './SearchBar.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
    return (
        <div className={styles.searchCont}>
            <input placeholder='Search...'/>
            <button children={<FontAwesomeIcon icon={faSearch}/>} />
        </div>
    )
}
