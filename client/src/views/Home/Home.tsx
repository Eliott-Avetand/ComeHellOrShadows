import styles from "./Home.module.scss";
import Carousel from "./Carousel/Carousel";
import Releases from "./Releases/Releases";
import News from "./News/News";
import Newsletter from "./Newsletter/Newsletter";

const Home = () => {
    return (
        <div className={styles.page}>
            <div className={styles.land}>
                <section className={styles.currentVolumes}>
                    <h5>Current Volumes</h5>
                    <Carousel />
                </section>
                <section className={styles.lastReleases}>
                    <h5>Last Releases</h5>
                    <Releases />
                </section>
            </div>
            <section className={styles.news}>
                <h5>News<span>- latest</span></h5>
                <News />
            </section>
            <Newsletter />
        </div>
    )
}

export default Home;