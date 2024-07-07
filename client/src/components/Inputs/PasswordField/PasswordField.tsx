import { useState } from "react";

import styles from "../Input.module.scss";
import { InputProps } from "../Input.types";

const PasswordField = ({ fieldValue, onChangeFunction }: InputProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    
    return (
        <div className={styles.inputData}>
            <input type={showPassword ? "text" : fieldValue} name="password" required placeholder="" onChange={onChangeFunction} />
            <label htmlFor={fieldValue}>{fieldValue}</label>
            {/* <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={() => setShowPassword(!showPassword)} className={styles.password} /> */}
        </div>
    )
}

export default PasswordField;