import styles from './carousel.module.css';
import { Card } from '../../components';
import ArrowRight from '../../assets/images/arrow-right.svg';
import ArrowLeft from '../../assets/images/arrow-left.svg';
import { useEffect, useRef, useState } from 'react';

const Carousel = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPage] = useState(0);
    const [people, setPeople] = useState([]);
    const carousel = useRef(null);

    const goLeft = () => (currentPage === 1 ? console.log('end') : setCurrentPage(currentPage - 1));

    const goRight = () => (currentPage === totalPages - 1 ? console.log('end') : setCurrentPage(currentPage + 1));

    const shiftCarousel = (currentPage) => {
        if (carousel && carousel.current) {
            let carouselItemWidth = carousel.current.firstChild.getBoundingClientRect().width;
            carousel.current.style.transform = `translate3d(calc(${-(carouselItemWidth * 2) * currentPage}px - ${
                4 * currentPage
            }rem), 0, 0`;
        }
    };

    useEffect(() => {
        setPeople([
            {
                id: 1,
                name: 'Rob Zuber',
                position: 'CEO',
                text: 'The explanation are clear, the teachers are responsible and friendly, and the homework is real practice',
            },
            {
                id: 2,
                name: 'Rob Zuber',
                position: 'CEO',
                text: 'The explanation are clear, the teachers are responsible and friendly, and the homework is real practice',
            },
            {
                id: 3,
                name: 'Rob Zuber',
                position: 'CEO',
                text: 'The explanation are clear, the teachers are responsible and friendly, and the homework is real practice',
            },
            {
                id: 4,
                name: 'Rob Zuber',
                position: 'CEO',
                text: 'The explanation are clear, the teachers are responsible and friendly, and the homework is real practice',
            },
            {
                id: 5,
                name: 'Rob Zuber',
                position: 'CEO',
                text: 'The explanation are clear, the teachers are responsible and friendly, and the homework is real practice',
            },
            {
                id: 6,
                name: 'Rob Zuber',
                position: 'CEO',
                text: 'The explanation are clear, the teachers are responsible and friendly, and the homework is real practice',
            },
            {
                id: 7,
                name: 'Rob Zuber',
                position: 'CEO',
                text: 'The explanation are clear, the teachers are responsible and friendly, and the homework is real practice',
            },
            {
                id: 8,
                name: 'Rob Zuber',
                position: 'CEO',
                text: 'The explanation are clear, the teachers are responsible and friendly, and the homework is real practice',
            },
            {
                id: 9,
                name: 'Rob Zuber',
                position: 'CEO',
                text: 'The explanation are clear, the teachers are responsible and friendly, and the homework is real practice',
            },
            {
                id: 10,
                name: 'Rob Zuber',
                position: 'CEO',
                text: 'The explanation are clear, the teachers are responsible and friendly, and the homework is real practice',
            },
        ]);
    }, []);

    useEffect(() => {
        setTotalPage(() => Math.ceil(people.length / 2));
    }, [people]);

    useEffect(() => {
        shiftCarousel(currentPage - 1);
    }, [currentPage]);

    return (
        <div className={styles.CarouselContainer}>
            <div className={styles.Carousel} ref={(el) => (carousel.current = el)}>
                {people.map((person) => (
                    <div key={person.id} className={styles.CarouselItem}>
                        <Card person={person} />
                    </div>
                ))}
            </div>
            <div className={styles.CarouselNav}>
                <button onClick={goLeft}>
                    <img src={ArrowLeft} alt='' />
                </button>
                <button onClick={goRight}>
                    <img src={ArrowRight} alt='' />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
