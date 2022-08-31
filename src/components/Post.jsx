import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/MatheusAndradeMelo.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Matheus ANdrade</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="31 de agosto às 22:35h" dateTime="2022-05-11 22:35:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa</p>
                <p>Acabei de subir mais um projeto no meu portifa !!</p>
                <p> <a href="">noclaf.web/frontend</a></p>
                <p> <a href="">#rocketseat</a></p>
            </div>

        </article>

    )
}