import styles from './Checkbox.module.css';
import {Circle, CheckCircle, Trash} from 'phosphor-react'

interface ICheckboxProps {
  isChecked: boolean;
  onCheckTask: () => void;
}

export function Checkbox({ isChecked, onCheckTask }: ICheckboxProps) {

  return (
    <label className={styles.container}>
      <input 
        type="checkbox" 
        checked={isChecked} 
        readOnly 
        onClick={onCheckTask} />

        {
          isChecked 
            ? <CheckCircle size={24} weight="fill" className={styles.checkIcon} />
            : <Circle size={24} className={styles.circleIcon} />
        }

    </label>
  )
}