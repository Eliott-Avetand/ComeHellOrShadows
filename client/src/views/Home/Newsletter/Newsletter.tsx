import { FormEvent } from "react";

import NewsletterImage from "@assets/Img/Characters/newsletter.png";

import styles from "./Newsletter.module.scss";

const Newsletter = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className={styles.page}>
            <div className={styles.text}>
                <h2>Subscribe to stay updated</h2>
                <p>Subscribe to the Daily Etid's news to get the latest information<br />
                from the Keyos' Universe and from Come Hell or Shadows.</p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit} >
                <input type='email' placeholder="Email" />
                <label>
                    <input type="checkbox" />
                    I agree that my email information is used to receive data from the universe
                </label>
                <input type="submit" value="Subscribe to Daily Etid's news" />
            </form>
            <img src={NewsletterImage} alt="Newsletter" />
        </div>
    )
}

export default Newsletter