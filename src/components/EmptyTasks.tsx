import styles from './EmptyTasks.module.css';
import clipboard from '../assets/clipboard.svg';

export function EmptyTasks() {
  return (
    <div className={styles.content}>
      <img src={clipboard} alt="Sem tarefas criadas" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>

    </div>
  )
}