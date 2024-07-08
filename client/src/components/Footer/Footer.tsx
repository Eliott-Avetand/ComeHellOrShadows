import { Link } from 'react-router-dom';

import Logo from "@assets/Img/Icons/Logo.png";
import Studio from "@assets/Img/Icons/Studio.png";
import Discord from '@assets/Img/Icons/discord.png';
import X from '@assets/Img/Icons/X.png';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.component}>
            <div className={styles.socials}>
                <Link to='https://discord.com' target='__blank'><img src={Discord} alt="discord" /></Link>
                <Link to='https://twitter.com' target='__blank'><img src={X} alt="X" /></Link>
            </div>
            <img src={Logo} className={styles.logo} alt="Come Hell or Shadows" />
            <nav>
                <Link to="privacy-policy">Privacy Policy</Link>
                <Link to="terms-service">Terms of Service</Link>
                <Link to="about">About Us</Link>
                <Link to="contact">Contact Us</Link>
            </nav>
            <img src={Studio} className={styles.studio} alt="Studio" />
            <i>Copyright © Keyos. All Rights Reserved.</i>
        </div>
    )
}

export default Footer