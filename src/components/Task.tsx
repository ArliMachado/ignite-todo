
import styles from './Task.module.css';

import {Circle, CheckCircle, Trash} from 'phosphor-react'
import { Checkbox } from './Checkbox';

export interface ITask {
  id: string;
  isChecked: boolean;
  text: string;
}

interface ITaskProps {
  task: ITask,
  onCheckTask: () => void;
  onRemoveTask: () => void;
}

export function Task({ task , onCheckTask, onRemoveTask }: ITaskProps) {
     return (
      <div className={styles.content}>
        <Checkbox isChecked={task.isChecked} onCheckTask={onCheckTask}/>
        <p className={task.isChecked ? styles.taskComplete : ''}>
          {task.text}
        </p>
        <button>
          <Trash size={24} onClick={onRemoveTask}/>
        </button>
      </div>

    )
      
}