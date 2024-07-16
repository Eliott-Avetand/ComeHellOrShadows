import styles from './FormButton.module.scss';

interface formButton {
    value: string,
}

const FormButton = ({ value }: formButton) => {
    return (
        <input type='submit' value={value} className={styles.formButton} />
    )
}

export default FormButton