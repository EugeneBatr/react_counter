import styles from './styles.module.scss'

import React from 'react'

const NoteComponent = ({note, index, handleNoteRemove,handleRedacted, isHidden}) => {
        return (
                <div>
                        <div className={styles.container}>
                                <div className={styles.smallContainer}>
                                        <div className={styles.number}>{index + 1}</div>
                                        <div className={styles.note}>{note}</div>
                                </div>
                        
                                <div className={styles.smallContainer}>
                                        <button className={styles.button} onClick={() => handleRedacted(index)}>/</button>
                                        <button className={styles.button} onClick={() => handleNoteRemove(index)}>x</button>
                                </div>
                                
                        </div>
                        <div>
                                {isHidden && <div>hi</div>}
                        </div>
                </div>        
        )
}

export default NoteComponent
