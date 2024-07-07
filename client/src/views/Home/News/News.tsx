import { ArrowOutward } from "@mui/icons-material";

// ! ASSETS TO REMOVE BECAUSE THEY WILL BE RECEIVED FROM THE BACK
import Volume4 from "@assets/Img/DEV_ASSETS/Volume4.jpg";
import News2 from "@assets/Img/DEV_ASSETS/news2.png";
import News3 from "@assets/Img/DEV_ASSETS/news3.png";
import News4 from "@assets/Img/DEV_ASSETS/news4.png";
import News5 from "@assets/Img/DEV_ASSETS/news5.png";
import News6 from "@assets/Img/DEV_ASSETS/news6.png";

import styles from "./News.module.scss";

const News = () => {
    return (
        <div className={styles.page}>
            <div className={styles.article}>
                <img src={News2} alt="We are hiring new members" />
                <i>Jun 26, 2024</i>
                <div className={styles.title}>
                    <h5>We are hiring new members</h5>
                    <ArrowOutward />
                </div>
            </div>
            <div className={styles.article}>
                <img src={News3} alt="Create your own character in Keyos!" />
                <i>Jun 22, 2024</i>
                <div className={styles.title}>
                    <h5>Create your own character in Keyos!</h5>
                    <ArrowOutward />
                </div>
            </div>
            <div className={styles.article}>
                <img src={News4} alt="Adaptation in Anime coming soon!!" />
                <i>Jun 15, 2024</i>
                <div className={styles.title}>
                    <h5>Adaptation in Anime coming soon!!</h5>
                    <ArrowOutward />
                </div>
            </div>
            <div className={styles.article}>
                <img src={News5} alt="Explore the new world on the website" />
                <i>Mar 30, 2024</i>
                <div className={styles.title}>
                    <h5>Explore the new world on the website</h5>
                    <ArrowOutward />
                </div>
            </div>
            <div className={styles.article}>
                <img src={Volume4} alt="New books out" />
                <i>Jan 20, 2024</i>
                <div className={styles.title}>
                    <h5>New books out</h5>
                    <ArrowOutward />
                </div>
            </div>
            <div className={styles.article}>
                <img src={News6} alt="Happy New Year" />
                <i>Jan 1, 2024</i>
                <div className={styles.title}>
                    <h5>Happy New Year</h5>
                    <ArrowOutward />
                </div>
            </div>
        </div>
    )
}

export default News