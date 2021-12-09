import { useState, useEffect } from 'react';
import styles from './card.module.css';

const Card = ({ person }) => {
    const [image, setImage] = useState('');

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=1&inc=picture&noinfo')
            .then((response) => response.json())
            .then((data) => setImage(data.results[0].picture.thumbnail));
    }, []);

    return (
        <div className={styles.Card}>
            <div className={styles.Content}>
                <p className={styles.Text}>{person.text}</p>
                <div className={styles.Person}>
                    <div className={styles.PersonImage}>
                        <img src={image} alt='' />
                    </div>
                    <div className={styles.PersonInfo}>
                        <h4>{person.name}</h4>
                        <span>{person.position}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
