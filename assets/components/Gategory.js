import React from 'react'
import styles from './Gategory.module.css'

import View from './View'
import Text from './Text'

export default function Gategory({title}) {
    return (
        <div className={styles.cont}>
            <View>
    <Text style={{color:'#373a40' , fontWeight:600}}>{title}</Text>                
            </View>
            <View>
                <Text style={{color:'#00b0ff'}}>More ...</Text>                
            </View>
        </div>
    )
}
