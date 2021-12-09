import styles from './tabs.module.css';

const Tabs = () => {
    const tabClickHandler = (e) => {};

    return (
        <div className={styles.TabsContainer}>
            <ul className={styles.TabsNav}>
                <li>
                    <button onClick={tabClickHandler}>
                        <span>All Categories</span>
                    </button>
                </li>
                <li>
                    <button onClick={tabClickHandler}>
                        <span>Entertainment</span>
                    </button>
                </li>
                <li>
                    <button onClick={tabClickHandler}>
                        <span>Lifestyle</span>
                    </button>
                </li>
                <li>
                    <button onClick={tabClickHandler}>
                        <span>Writing</span>
                    </button>
                </li>
                <li>
                    <button onClick={tabClickHandler}>
                        <span>Business</span>
                    </button>
                </li>
                <li>
                    <button onClick={tabClickHandler}>
                        <span>Food</span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Tabs;
