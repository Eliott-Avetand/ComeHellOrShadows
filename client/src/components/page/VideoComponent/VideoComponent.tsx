import { useRef } from 'react';
import styles from './VideoComponent.module.scss';
import Videobar from './VideoBar/Videobar';

interface videoComponentProps {
    onVideoEnd: () => void,
    videoPath: string,
    storageName: string
}

const VideoComponent = ({ onVideoEnd, videoPath, storageName }: videoComponentProps) => {
    const curtainRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);

    const handleEndVideo = () => {
        if (curtainRef.current && videoRef.current) {
            curtainRef.current.style.display = "block";
            videoRef.current.style.display = "none";

            const test = setTimeout(() => {
                onVideoEnd();
                localStorage.setItem(storageName, "true");
                clearTimeout(test);
            }, 2000);
        }
    }

    return (
        <>
            <div ref={curtainRef} className={styles.curtain}></div>
            <div ref={videoRef} className={styles.videoWrapper}>
                <Videobar />
                <video autoPlay muted onEnded={handleEndVideo} className={styles.video}>
                    <source src={videoPath} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </>
    )
}

export default VideoComponent;