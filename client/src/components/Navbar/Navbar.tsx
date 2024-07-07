import Logo from "../../assets/Img/Logo.png";
import styles from './Navbar.module.scss';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";
import { MouseEvent, useEffect, useRef } from "react";
import { useAppSelector } from "../../config/useAppDispatch";
import profileTemplate from "../../assets/Img/profileTemplate.png";

const Navbar = () => {
    const user = useAppSelector(state => state.userReducer);
    const location = useLocation();
    const navRef = useRef<HTMLDivElement>(null);

    const handleActive = (event: MouseEvent<HTMLElement>) => {
        const currentActive = document.querySelector(`.${styles.active}`);
        const nextActive = event.target as HTMLLinkElement;

        if (currentActive)
            currentActive.classList.remove(styles.active);
        nextActive.classList.add(styles.active);
    }

    useEffect(() => {
        const navElement = navRef.current;

        if (navElement) {
            const links = navElement.querySelectorAll('a');
            
            links.forEach(link => {
                if (link.getAttribute('href') === location.pathname) {
                    link.classList.add(styles.active);
                } else {
                    link.classList.remove(styles.active);
                }
            });
        }
    }, [location])

    return (
        <div className={styles.component} ref={navRef}>
            <Link to="/"><img src={Logo} alt="Come Hell or Shadows" /></Link>
            <nav>
                <div className={styles.link}>
                    <Link className={styles.active} to='/' onClick={handleActive}>Home</Link>
                    <Link to='/manga' onClick={handleActive}>Manga</Link>
                    <Link to='/news' onClick={handleActive}>News</Link>
                    <Link to='/characters' onClick={handleActive}>Characters</Link>
                    <Link to='/world' onClick={handleActive}>World</Link>
                </div>
                { user.isAuthenticated
                ? <img className={styles.profile} src={profileTemplate} alt={user.profile.username} height={50} />
                : <div className={styles.connexion}>
                    <FontAwesomeIcon icon={faHeadphonesSimple} />
                    <Link to='/login' onClick={handleActive}>Login</Link>
                    <Link to='/register' onClick={handleActive}>Join Keyos!</Link>
                </div> }
            </nav>
        </div>
    )
}

export default Navbar