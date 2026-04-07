import styles from './TopTen.module.css';
import { TopTenItem } from './TopTenItem';
import { getTopTen } from './TopTenjava.js';

export function TopTen(){
    return (
        <section className={styles.top10}>
            <h1 className={styles.boxes_text}>Top 10 Superpowers</h1>
            <ol className={styles.container}>
                    {
                            getTopTen().map((Superpower, index) => (
                                <TopTenItem number={index + 1} name={Superpower.name} summery={Superpower.summery}/>
                            ))
                    }
            </ol>
        </section>

    )
}