import { Email } from "@mui/icons-material";
import styles from "../Input.module.scss";
import { InputProps } from "../Input.types";

const EmailField = ({ fieldValue, onChangeFunction }: InputProps) => {
    return (
        <div className={styles.inputData}>
            <input type={fieldValue} name="email" required placeholder="" onChange={onChangeFunction} />
            <label htmlFor={fieldValue}>{fieldValue}</label>
            <Email />
        </div>
    )
}

export default EmailField;