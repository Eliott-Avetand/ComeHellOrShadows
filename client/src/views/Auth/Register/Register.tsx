import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAppDispatch } from "@config/useAppDispatch";
import { register } from "@actions/users.actions";
import X from "@assets/Img/Icons/X.png";
import Facebook from "@assets/Img/Icons/Facebook.png";
import Google from "@assets/Img/Icons/Google.png";
import EmailField from "../../../components/Inputs/EmailField/EmailField";
import PasswordField from "../../../components/Inputs/PasswordField/PasswordField";

import { formData } from "../form.types";
import styles from "./Register.module.scss";

const Register = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState<formData>({
        email: "",
        password: ""
    });

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            email: form.email,
            password: form.password
        }

        const result = await dispatch(register(data));

        if (register.fulfilled.match(result)) {
            toast.success("Welcome " + result.payload.username);
            navigate("/customize-profile");
        } else {
            if (result.payload)
                toast.error(result.payload.message);
            else
            toast.error(result.error.message);
        }
    }

    const handleFormValue = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className={styles.page}>
            <div className={styles.box}>
                <h1>Create New Account</h1>
                <form className={styles.form} onSubmit={handleRegister}>
                    <EmailField fieldValue="Email" onChangeFunction={handleFormValue} />
                    <PasswordField fieldValue="Password" onChangeFunction={handleFormValue} />
                    <input className={styles.submit} type="submit" value="Create Your Account" />
                </form>
                <p>Already have an account?<Link to="/login">Login here</Link></p>
                <p>Or Create with Social Accounts</p>
                <div className={styles.socials}>
                    <img src={Google} alt="Google" />
                    <img src={Facebook} alt="Facebook" />
                    <img src={X} alt="X / Twitter" />
                </div>
            </div>
        </div>
    )
}

export default Register;