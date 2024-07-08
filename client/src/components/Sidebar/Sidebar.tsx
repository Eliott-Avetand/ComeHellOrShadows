import { Link, useLocation } from "react-router-dom";
import { MouseEvent, useEffect, useRef } from "react";

import { useAppSelector } from "@config/useAppDispatch";
import profileTemplate from "@assets/Img/DEV_ASSETS/profileTemplate.png";

import styles from './Sidebar.module.scss';

const Sidebar = () => {
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

    const handleMenu = (e: MouseEvent<HTMLDivElement>) => {
        const navElement = navRef.current;
        const content = navElement?.querySelector(`.${styles.content}`);
        const burger = e.currentTarget as HTMLDivElement;

        if (navElement && content) {
            content.classList.toggle(styles.opened);
            burger.classList.toggle(styles.opened);
        }
    }

    useEffect(() => {
        const navElement = navRef.current;
        const burger = navElement?.querySelector(`.${styles.burger}`);
        const content = navElement?.querySelector(`.${styles.content}`);
        const links = navElement?.querySelectorAll('a');
        
        if (links && burger && content) {
            links.forEach(link => {
                if (link.getAttribute('href') === location.pathname) {
                    link.classList.add(styles.active);
                } else {
                    link.classList.remove(styles.active);
                }
            });
            content.classList.remove(styles.opened);
            burger.classList.remove(styles.opened);
        }
    }, [location])

    return (
        <div className={styles.component} ref={navRef}>
            <div className={styles.burger} onClick={handleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={styles.content}>
                { !user.isAuthenticated
                ? <div className={styles.profile}>
                    <Link to="/profile">
                        <img src={profileTemplate} alt={user.profile.username} />
                        Soryoz
                    </Link>
                </div>
                : <></> }
                <nav className={styles.link}>
                    <Link className={styles.active} to='/' onClick={handleActive}>Home</Link>
                    <Link to='/manga' onClick={handleActive}>Manga</Link>
                    <Link to='/news' onClick={handleActive}>News</Link>
                    <Link to='/characters' onClick={handleActive}>Characters</Link>
                    <Link to='/world' onClick={handleActive}>World</Link>
                    { !user.isAuthenticated
                    ? <div className={styles.connexion}>
                        <Link to='/login' onClick={handleActive}>Login</Link>
                        <Link to='/register' onClick={handleActive}>Join Keyos!</Link>
                    </div>
                    : <Link to='/logout' onClick={handleActive}>Logout</Link> }
                </nav>
            </div>
        </div>
    )
}

export default Sidebar