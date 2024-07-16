import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Email } from "@mui/icons-material";

import ChangeTitle from "@/services/ChangeTitle";
import { useAppDispatch } from "@config/useAppDispatch";
import { register } from "@actions/users.actions";
import useForm from "@/hooks/useForm";
import InputPasswordField from "@/components/common/Inputs/PasswordField/InputPasswordField";
import InputField from "@/components/common/Inputs/InputField";
import FormButton from "@/components/common/Buttons/FormButton/FormButton";
import VideoComponent from "@/components/page/VideoComponent/VideoComponent";

import X from "@assets/Img/Icons/X.png";
import Facebook from "@assets/Img/Icons/Facebook.png";
import Google from "@assets/Img/Icons/Google.png";
import VideoPath from "@assets/Video/RegisterIntro.mp4";

import styles from "./Register.module.scss";

const Register = () => {
    const [isVideoEnded, setIsVideoEnded] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { values, handleChange } = useForm({ email: "", password: "" });
    const firstVisitRegister = localStorage.getItem("firstVisitRegister");

    ChangeTitle("CHoS - Register");

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result = await dispatch(register(values));

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

    return (
        <div className={styles.page}>
            {
                !isVideoEnded && !firstVisitRegister
                ? <VideoComponent
                    onVideoEnd={() => setIsVideoEnded(true)}
                    videoPath={VideoPath}
                    storageName="firstVisitRegister"
                />
                : <></>
            }
            <div className={styles.box}>
                <h1>Create New Account</h1>
                <form className={styles.form} onSubmit={handleRegister}>
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