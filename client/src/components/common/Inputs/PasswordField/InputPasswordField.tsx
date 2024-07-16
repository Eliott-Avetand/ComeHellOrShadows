import { ChangeEvent, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import styles from "../InputField.module.scss";

interface inputPasswordFieldProps {
    label: string,
    name: string, 
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

const InputPasswordField = ({ label, name, value, onChange }: inputPasswordFieldProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    
    return (
        <div className={styles.inputData}>
            <input type={showPassword ? "text" : "password"} name={name} required placeholder="" value={value} onChange={onChange} />
            <label htmlFor={name}>{label}</label>
            {
                showPassword
                ? <VisibilityOff onClick={() => setShowPassword(!showPassword)} />
                : <Visibility onClick={() => setShowPassword(!showPassword)} />
            }
        </div>
    )
}

export default InputPasswordField;