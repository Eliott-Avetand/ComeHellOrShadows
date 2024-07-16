import { inputFieldProps } from './Input.types';
import styles from './InputField.module.scss';

const InputField = ({ label, name, type, value, onChange, icon }: inputFieldProps) => {
    return (
        <div className={styles.inputData}>
            <input type={type} name={name} required placeholder="" value={value} onChange={onChange} />
            <label htmlFor={name}>{label}</label>
            {icon}
        </div>
    )
}

export default InputField