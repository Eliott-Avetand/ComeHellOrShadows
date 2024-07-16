import { MouseEvent, useEffect, useRef, useState } from "react";
import { MusicNote, MusicOff } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

import Logo from "@assets/Img/Icons/Logo.png";
import { useAppSelector } from "@config/useAppDispatch";

import styles from './Navbar.module.scss';

// ! ASSETS TO REMOVE BECAUSE THEY WILL BE RECEIVED FROM THE BACK
import profileTemplate from "@assets/Img/DEV_ASSETS/profileTemplate.png";

const Navbar = () => {
    const [isMusic, setIsMusic] = useState<boolean>(true);
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

    const handleMusic = () => {
        setIsMusic(!isMusic);
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
                    <span onClick={handleMusic}>{isMusic ? <MusicNote /> : <MusicOff />}</span>
                    <Link to='/login' onClick={handleActive}>Login</Link>
                    <Link to='/register' onClick={handleActive}>Join Keyos!</Link>
                </div> }
            </nav>
        </div>
    )
}

export default Navbar