import { Link } from "react-router-dom";
import { Favorite, Visibility } from "@mui/icons-material";

// ! ASSETS TO REMOVE BECAUSE THEY WILL BE RECEIVED FROM THE BACK
import Release1 from "@assets/Img/DEV_ASSETS/release1.png";
import Release2 from "@assets/Img/DEV_ASSETS/release2.png";
import Release3 from "@assets/Img/DEV_ASSETS/release3.png";
import Release4 from "@assets/Img/DEV_ASSETS/release4.png";

import styles from "./Releases.module.scss";

const Releases = () => {
    return (
        <div className={styles.page}>
            <div className={styles.release}>
                <h6>01</h6>
                <img src={Release1} alt="Whatever it takes" />
                <div className={styles.infos}>
                    <div className={styles.title}>
                        <h5>Whatever it Takes</h5>
                        <i>Chapter 456</i>
                    </div>
                    <div className={styles.stats}>
                        <Visibility />
                        <h6>1260</h6>
                        <Favorite />
                        <h6>754</h6>
                    </div>
                    <Link to="#">Read it</Link>
                </div>
            </div>
            <div className={styles.release}>
                <h6>02</h6>
                <img src={Release2} alt="Adonys" />
                <div className={styles.infos}>
                    <div className={styles.title}>
                        <h5>Adonys</h5>
                        <i>Chapter 455</i>
                    </div>
                    <div className={styles.stats}>
                        <Visibility />
                        <h6>2489</h6>
                        <Favorite />
                        <h6>1298</h6>
                    </div>
                    <Link to="#">Read it</Link>
                </div>
            </div>
            <div className={styles.release}>
                <h6>03</h6>
                <img src={Release3} alt="Honor of Chivalry" />
                <div className={styles.infos}>
                    <div className={styles.title}>
                        <h5>Honor of Chivalry</h5>
                        <i>Chapter 454</i>
                    </div>
                    <div className={styles.stats}>
                        <Visibility />
                        <h6>8942</h6>
                        <Favorite />
                        <h6>2791</h6>
                    </div>
                    <Link to="#">Read it</Link>
                </div>
            </div>
            <div className={styles.release}>
                <h6>04</h6>
                <img src={Release4} alt="How is it done?" />
                <div className={styles.infos}>
                    <div className={styles.title}>
                        <h5>How is it done?</h5>
                        <i>Bonus: inside the creation</i>
                    </div>
                    <div className={styles.stats}>
                        <Visibility />
                        <h6>289</h6>
                        <Favorite />
                        <h6>89</h6>
                    </div>
                    <Link to="#">Read it</Link>
                </div>
            </div>
        </div>
    )
}

export default Releases