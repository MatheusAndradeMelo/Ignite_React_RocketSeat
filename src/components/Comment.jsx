import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/MatheusAndradeMelo.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Andrade</strong>
                            <time title="31 de agosto às 22:35h" dateTime="2022-05-11 22:35:30">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentárop">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom matheus, parabéns !!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}