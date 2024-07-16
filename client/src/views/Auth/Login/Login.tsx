import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Email } from "@mui/icons-material";

import VideoPath from "@assets/Video/LoginIntro.mp4";
import { useAppDispatch } from "@config/useAppDispatch.ts";
import InputPasswordField from "@/components/common/Inputs/PasswordField/InputPasswordField";
import InputField from "@/components/common/Inputs/InputField";
import { login } from "@actions/users.actions.ts";
import Facebook from "@assets/Img/Icons/Facebook.png";
import Google from "@assets/Img/Icons/Google.png";
import X from "@assets/Img/Icons/X.png";
import useForm from "@/hooks/useForm";
import VideoComponent from "@/components/page/VideoComponent/VideoComponent";
import FormButton from "@/components/common/Buttons/FormButton/FormButton";

import styles from "./Login.module.scss";

const Login = () => {
    const [isVideoEnded, setIsVideoEnded] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { values, handleChange } = useForm({ email: "", password: "" });
    const firstVisitLogin = localStorage.getItem("firstVisitLogin");

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result = await dispatch(login(values));

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

    return (
        <div className={styles.page}>
            {
                !isVideoEnded && !firstVisitLogin
                ? <VideoComponent
                    onVideoEnd={() => setIsVideoEnded(true)}
                    videoPath={VideoPath}
                    storageName="firstVisitLogin"
                />
                : <></>
            }
            <div className={styles.box}>
                <h1>Login</h1>
                <form className={styles.form} onSubmit={handleLogin}>
                    <InputField
                        label="Email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        icon={<Email />}
                    />
                    <InputPasswordField
                        label="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <FormButton value="Create account" />
                </form>
                <p>Or Continue with Social Accounts</p>
                <div className={styles.socials}>
                    <img src={Google} alt="Google" />
                    <img src={Facebook} alt="Facebook" />
                    <img src={X} alt="X / Twitter" />
                </div>
                <p>Not yet registered?<Link to="/register">Create your account here</Link></p>
            </div>
        </div>
    )
}

export default Login;