import { useState } from 'react';
import styles from './CookieClicker.module.css';

export function CookieClicker(){
    const [score, setScore] = useState(0);
    const [grandmas, setGrandmas] = useState(0);
    
    const cost = Math.floor(20 * 1.15 ** grandmas);

    function buyGrandma(){
        if(score > cost){
            setGrandmas(grandmas+1);
            setScore(score - cost);
        }
    }

    function clickButton(){
        setScore(score + 1 + grandmas);
    }

    return (
        <section className={styles.container}>
            <div className={styles.score}>Score: {score}</div>
            <button onClick={clickButton} className={styles.cookieButton}>
                <img src="https://cookieclicker.wiki.gg/images/thumb/PerfectCookie.png/210px-PerfectCookie.png?7390cf" alt="" />
            </button>

            <div className={styles.grandma_container}>
                <div className={styles.grandmas}>
                    Grandmas: {grandmas}
                </div>
                <div className={styles.grandmas}>
                    Cookies Per Click: {grandmas > 0 ? 1 + grandmas : 1}
                </div>
                <div className={styles.cost}>
                    Cost: {cost}
                </div>
                <button onClick={buyGrandma} id='upgrade' className={styles.upgrade}>
                    Buy grandma
                </button>
            </div>

        </section>
    )
}