import "./global.css";
import { Header } from "./components/Header";
import {PlusCircle} from 'phosphor-react'
import { v4 } from "uuid"

import styles from './App.module.css';
import { TaskStatus } from "./components/TaskStatus";
import { EmptyTasks } from "./components/EmptyTasks";
import { ITask, Task } from "./components/Task";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";



function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  const tasksStatus = useMemo(() => {
    const totalTasks = tasks.length;
    const TotalTasksFinished = tasks.reduce((accumulator: number, task: ITask) => {
      if (task.isChecked) {
        accumulator += 1;
      }
      return accumulator
    }, 0)

    return {
      totalTasks,
      TotalTasksFinished
    }

  }, [tasks])


  function handleNewTaskText(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    if (newTask) {
      const task = { id: v4(), text: newTask, isChecked: false };
      setTasks(state => [...state, task]);
      setNewTask('');

    }
  }

  function handleTaskComplete(id: string){

    const newTasksList = tasks.map(task => {
      if (task.id === id) {
        task.isChecked = !task.isChecked;
      }

      return task;
    })
    setTasks(newTasksList);
    
  }

  function handleRemoveTask(id :string) {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <form className={styles.taskForm} onSubmit={handleCreateNewTask}>
          <input
            type="text" 
            placeholder="Adicione uma nova tarefa" 
            value={newTask}
            onChange={handleNewTaskText}
          />
          <button type="submit">
            Criar
            <PlusCircle size={16}/>
          </button>
        </form>

        <div className={styles.taskStatusContent}>
          <TaskStatus 
            title="Tarefas criadas"
            colorTitle="blue"
            count={tasksStatus.totalTasks.toString()}
          />

          <TaskStatus 
            title="Concluídas"
            colorTitle="purple"
            count={`${tasksStatus.TotalTasksFinished} de ${tasksStatus.totalTasks}`}//"2 de 50"
          />
        </div>

        <main className={styles.taskListContent}>
          
          {
          tasks.length === 0
          ? 
            (
                <EmptyTasks />
            ) 
          : 
            ( 
              <ul>
                {
                  tasks.map(task => (
                      <li key={task.id} className={task.isChecked ? 'completed' : ''} >
                        <label className="checkbox-container">
                          <Task 
                              task={task}
                              onCheckTask={() => handleTaskComplete(task.id)}
                              onRemoveTask={() => handleRemoveTask(task.id)}
                            />
                        </label>
                      </li>
                  ))
                }
              </ul>

            )
          } 
        </main>

      </div>
    </div>
  )
}

export default App
