import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Bookmarks, ChevronLeft, ChevronRight, Favorite, FiberManualRecord, Visibility } from "@mui/icons-material";

import styles from './Carousel.module.scss';

// ! ASSETS TO REMOVE BECAUSE THEY WILL BE RECEIVED FROM THE BACK
import Volume4 from '@assets/Img/DEV_ASSETS/Volume4.jpg';
import Volume3 from '@assets/Img/DEV_ASSETS/Volume3.jpg';
import Volume2 from '@assets/Img/DEV_ASSETS/Volume2.jpg';
import Volume1 from '@assets/Img/DEV_ASSETS/Volume1.jpg';

interface nextArrowFunctionProps {
    className?: string,
    onClick?: () => void
}

const Carousel = () => {
    function CustomNextArrow({ className, onClick }: nextArrowFunctionProps) {
        return (
            <div
                id={styles.customNextArrow}
                className={className}
                onClick={onClick}
            >
                <div className={styles.arrowWrapper}><ChevronRight /></div>
            </div>
        );
    }

    function CustomPrevArrow({ className, onClick }: nextArrowFunctionProps) {
        return (
            <div
                id={styles.customPrevArrow}
                className={className}
                onClick={onClick}
            >
                <div className={styles.arrowWrapper}><ChevronLeft /></div>
            </div>
        );
    }

    return (
        <Slider
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
        >
            <div className={styles.volume}>
                <img src={Volume4} alt="Volume 4" />
                <div className={styles.infos}>
                    <h6>Come Hell or Shadows</h6>
                    <h4>Volume IV: Unexpected World</h4>
                    <div className={styles.stats}>
                        <Bookmarks />
                        <i>112 chapter</i>
                        <FiberManualRecord />
                        <Visibility />
                        <i>124563</i>
                        <Favorite />
                        <i>35896</i>
                    </div>
                    <div className={styles.languages}>
                        <Link to='#'>FR</Link>
                        <Link to='#'>EN</Link>
                    </div>
                </div>
            </div>
            <div className={styles.volume}>
                <img src={Volume3} alt="Volume 3" />
                <div className={styles.infos}>
                    <h6>Come Hell or Shadows</h6>
                    <h4>Volume III: Unfulfilled Prayers</h4>
                    <div className={styles.stats}>
                        <Bookmarks />
                        <i>72 chapter</i>
                        <FiberManualRecord />
                        <Visibility />
                        <i>985476</i>
                        <Favorite />
                        <i>147896</i>
                    </div>
                    <div className={styles.languages}>
                        <Link to='#'>FR</Link>
                        <Link to='#'>EN</Link>
                    </div>
                </div>
            </div>
            <div className={styles.volume}>
                <img src={Volume2} alt="Volume 2" />
                <div className={styles.infos}>
                    <h6>Come Hell or Shadows</h6>
                    <h4>Volume II: Beyond the limits</h4>
                    <div className={styles.stats}>
                        <Bookmarks />
                        <i>168 chapter</i>
                        <FiberManualRecord />
                        <Visibility />
                        <i>1475236</i>
                        <Favorite />
                        <i>324786</i>
                    </div>
                    <div className={styles.languages}>
                        <Link to='#'>FR</Link>
                        <Link to='#'>EN</Link>
                    </div>
                </div>
            </div>
            <div className={styles.volume}>
                <img src={Volume1} alt="Volume 1" />
                <div className={styles.infos}>
                    <h6>Come Hell or Shadows</h6>
                    <h4>Volume I: Introspection</h4>
                    <div className={styles.stats}>
                        <Bookmarks />
                        <i>129 chapter</i>
                        <FiberManualRecord />
                        <Visibility />
                        <i>1852369</i>
                        <Favorite />
                        <i>753951</i>
                    </div>
                    <div className={styles.languages}>
                        <Link to='#'>FR</Link>
                        <Link to='#'>EN</Link>
                    </div>
                </div>
            </div>
        </Slider>
  )
}

export default Carousel