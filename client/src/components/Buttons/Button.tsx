import { MouseEventHandler } from 'react';
import styles from './Button.module.scss';

interface button {
    value: string,
    onClick: MouseEventHandler<HTMLInputElement>,
    className?: string
}

const Button = ({ value, onClick, className }: button) => {
    return (
        <div className={`${styles.btnWrapper} ${className}`} onClick={onClick}>
            <p className={styles.button}>{value}</p>
        </div>
    )
}

export default Button