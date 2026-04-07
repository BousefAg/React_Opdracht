import styles from './AboutMe.module.css';
export function AboutMe(){
    return (
            <article>
                <section className={styles.aboutMe}>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src="https://static.wikia.nocookie.net/koppieverse/images/2/2a/JP.png/revision/latest?cb=20250228160704" alt="" className={styles.image}/>
                    </div>
                    <div className={styles.container}>
                        <h1 className={styles.aboutMe__title}>
                            About me
                        </h1>
                        <p className={styles.aboutMe__paragraph}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat iste in cupiditate, magnam beatae reiciendis, voluptatem temporibus voluptatibus iusto nam explicabo asperiores nesciunt, quae natus eum doloribus fuga delectus.
                        </p>
                    </div>
                </section>
            </article>
    )
}