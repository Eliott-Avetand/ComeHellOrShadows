import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";

import { useAppDispatch } from "@config/useAppDispatch.ts";
import { login } from "@actions/users.actions.ts";
import Character from "@assets/Img/Characters/Aurore.png";
import Facebook from "@assets/Img/Icons/Facebook.png";
import Google from "@assets/Img/Icons/Google.png";
import X from "@assets/Img/Icons/X.png";

import styles from "./Login.module.scss";

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        }

        const result = await dispatch(login(data));

        if (login.fulfilled.match(result)) {
            toast.success("Welcome back " + result.payload.username);
            navigate("/");
        } else {
            if (result.payload)
                toast.error(result.payload.message);
            else
                toast.error(result.error.message);
        }
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);        
    }

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        const character = document.querySelector(`.${styles.character}`) as HTMLImageElement;

        if (character)
            character.style.animationPlayState = "running";
    }, [])
    

    return (
        <div className={styles.page}>
            <div className={styles.box}>
                <h1>Login</h1>
                <form className={styles.form} onSubmit={handleLogin}>
                    <div className={styles.inputData}>
                        <input type="email" name="emailTest" autoComplete="off" autoFocus required placeholder="" onChange={handleEmail} />
                        <p>Email</p>
                        <Email />
                    </div>
                    <div className={styles.inputData}>
                        <input type={showPassword ? "text" : "password"} name="password" required placeholder="" onChange={handlePassword} />
                        <p>Password</p>
                        <span onClick={handleShowPassword}>
                            { showPassword ? <VisibilityOff /> : <Visibility /> }
                        </span>
                    </div>
                    <div className={styles.passwordSettings}>
                        <label><input type="checkbox" name="remember" /> Remember me?</label>
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                    <input className={styles.submit} type="submit" value="Login" name="submit" />
                </form>
                <p>Or Continue with Social Accounts</p>
                <div className={styles.socials}>
                    <img src={Google} alt="Google" />
                    <img src={Facebook} alt="Facebook" />
                    <img src={X} alt="X / Twitter" />
                </div>
                <p>Not yet registered?<Link to="/register">Create your account here</Link></p>
            </div>
            <img className={styles.character} src={Character} alt="Aurore" />
        </div>
    )
}

export default Login;