import "./global.css";
import { Header } from "./components/Header";
import {PlusCircle} from 'phosphor-react'

import styles from './App.module.css';
import { TaskStatus } from "./components/TaskStatus";
import { EmptyTasks } from "./components/EmptyTasks";

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <form className={styles.taskForm}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar
            <PlusCircle size={16}/>
          </button>
        </form>

        <div className={styles.taskStatusContent}>
          <TaskStatus 
            title="Tarefas criadas"
            colorTitle="blue"
            count="0"
          />

          <TaskStatus 
            title="Concluídas"
            colorTitle="purple"
            count="2 de 50"
          />
        </div>

        <div className={styles.taskListContent}>
          <EmptyTasks />
        </div>

      </div>
    </div>
  )
}

export default App
