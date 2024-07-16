import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface button {
    value: ReactNode,
    onClick: () => void,
    type: "rounded"
}

const Button = ({ value, onClick, type }: button) => {
    return (
        <button type='button' onClick={onClick} className={`${styles.button} ${styles[type]}`}>{value}</button>
    )
}

export default Button