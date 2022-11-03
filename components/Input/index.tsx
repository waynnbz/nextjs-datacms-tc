import {useId} from 'react'
import styles from './input.module.css';


export default function Input({onChange, label, required}: { label: string, onChange: (v: string) => void, required: boolean}) {
    const inputId = useId();
    return (<div className={styles.input}>
        <label htmlFor={inputId}>{label}{required && <span>*</span>}</label>
        <input id={inputId} onChange={event => (onChange(event.target.value))} type="password"/>
    </div>)
}
