import "./global.css";
import { Header } from "./components/Header";
import {PlusCircle, Trash} from 'phosphor-react'
import { v4 } from "uuid"

import styles from './App.module.css';
import { TaskStatus } from "./components/TaskStatus";
import { EmptyTasks } from "./components/EmptyTasks";
import { ITask, Task } from "./components/Task";
import { useEffect, useState } from "react";


const taskList = [
  {
    id: v4(),
    isChecked: false,
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. \
            Duis vel sed fames integer.'
  },
  {
    id: v4(),
    isChecked: true,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
            Eligendi voluptates quidem itaque officia velit modi voluptatum, \
            earum tenetur nihil, vitae quaerat. Animi rerum distinctio optio \
            minima quod, modi quo a.'
  },
  {
    id: v4(),
    isChecked: false,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. \
            Porro possimus quaerat laudantium corporis eveniet necessitatibus \
            reiciendis aperiam saepe eligendi officiis unde velit, eius soluta \
            distinctio. Adipisci odit itaque illum possimus?'
  }
];


function App() {



  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(()=> {
    function loadTasks() {
      setTasks([...taskList]);
    }

    loadTasks();
  }, [])

  function handleTaskComplete(id: string){

    console.log(id);
    
    const newTasksList = tasks.map(task => {
      if (task.id === id) {
        task.isChecked = !task.isChecked;
      }

      return task;
    })
    setTasks(newTasksList);
    
  }

  

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
