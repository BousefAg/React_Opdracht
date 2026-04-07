import styles from './TopTenItem.module.css';

export function TopTenItem(props) {
    return (
        <article>
        <div className={styles.top10}>
            <ol className={styles.container}>
                <li  className={styles.number}>{props.number}</li>
                <li  className={styles.name}>{props.name}</li>
                <li className={styles.paragraph}>{props.summery}</li>
                <br></br>
            </ol>
        </div>
        </article>
    )
}