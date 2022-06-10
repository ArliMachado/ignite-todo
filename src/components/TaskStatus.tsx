
import styles from './TaskStatus.module.css';

interface ITaskStatusProps {
  title: string;
  colorTitle: 'blue' | 'purple';
  count: string;
}

export function TaskStatus({ title, colorTitle, count }: ITaskStatusProps) {

  return(
    <div className={styles.content}>
      <strong className={colorTitle === 'blue' ? styles.blueTitle : styles.purpleTitle}>
        {title}
      </strong>
      <span>{count}</span>
    </div>
  )
}