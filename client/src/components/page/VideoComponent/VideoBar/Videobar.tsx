import { useState } from 'react';
import { ArrowBack, MusicNote, MusicOff } from '@mui/icons-material';

import Button from '@/components/common/Buttons/Button/Button';

import styles from './Videobar.module.scss';
import { useNavigate } from 'react-router-dom';

const Videobar = () => {
    const navigate = useNavigate();
    const [isMusic, setIsMusic] = useState(true);

    const goBack = () => {
        navigate(-1);
    }

    const handleMusic = () => {
        setIsMusic(!isMusic);
    }

    return (
        <div className={styles.videoBar}>
            <Button
                value={<><ArrowBack style={{ marginRight: '10px' }} /> BACK</>}
                onClick={goBack}
                type='rounded'
            />
            <Button
                value={isMusic ? <MusicNote /> : <MusicOff />}
                onClick={handleMusic}
                type='rounded'
            />
        </div>
    )
};

export default Videobar