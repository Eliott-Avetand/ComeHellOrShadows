import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.scss';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Logo from "../../assets/Img/Logo.png";
import Studio from "../../assets/Img/Studio.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={styles.component}>
            <div className={styles.socials}>
                <FontAwesomeIcon icon={faDiscord} />
                <FontAwesomeIcon icon={faTwitter} />
            </div>
            <img src={Logo} alt="Come Hell or Shadows" />
            <nav>
                <Link to="privacy-policy">Privacy Policy</Link>
                <Link to="terms-service">Terms of Service</Link>
                <Link to="about">About Us</Link>
                <Link to="contact">Contact Us</Link>
            </nav>
            <img src={Studio} alt="Studio" />
            <i>Copyright © Keyos. All Rights Reserved.</i>
        </div>
    )
}

export default Footer