import React, { useCallback, useState, useEffect } from 'react'
import {ReactComponent as UpdateIcon} from '../../../../../../assets/icons/update-icon.svg'
import {ReactComponent as DeleteIcon} from '../../../../../../assets/icons/delete-icon.svg'
import styles from './TodoItem.module.css'

function TodoItem({id, title, completed, onModalOpen, onStatusUpdate, onDelete}) {
    const [isChecked, setIsChecked] = useState(completed)
    const handleChange = useCallback((evt) => {
        setIsChecked(evt.target.checked)
    }, [])
    useEffect(() => {
        onStatusUpdate(id, isChecked)
    },[id, isChecked, onStatusUpdate])
    const handleModalOpen = useCallback(() => {
        onModalOpen(id)
    }, [onModalOpen, id])
    const handleDelete = useCallback(() => {
        onDelete(id)
    }, [onDelete, id])
    return (
        <li className={styles.item}>
            <span className={completed ? styles.completed : null}>{title}</span>
            <div className={styles.controlButtons}>
                <button onClick={handleModalOpen}><UpdateIcon/></button>
                <input type="checkbox" checked={isChecked} onChange={handleChange}></input>
                <button onClick={handleDelete}><DeleteIcon/></button>
            </div>
        </li>
    )
}

export default TodoItem