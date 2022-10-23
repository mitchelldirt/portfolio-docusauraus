import React from 'react'
import styles from './styles.module.css'
export default function TagList({ tags }) {
    return (
        <>
            <ul className={styles.tagList}>

                {tags.map((tag, idx) => (
                    <li key={idx} className={styles.tagItem}>

                        <a key={idx} className={styles.tagLabel}>{tag}</a></li>
                ))}
            </ul>
        </>
    )
}