import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { useEffect, useState } from "react"
import { Task } from "./types/Tasks"
import { TaskArea } from './components/TaskArea'
import {v4 as uuid} from 'uuid'

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {id: uuid(), title: "Esse irure nisi excepteur ex non fugiat elit consequat ea qui cillum amet.", checked: true},
    {id: uuid(), title: "Esse irure nisi excepteur ex non fugiat elit consequat ea qui cillum amet.", checked: true},
    {id: uuid(), title: "Esse irure nisi excepteur ex non fugiat elit consequat ea qui cillum amet.", checked: false},

  ])

  const addTask = (addNewTask: string) => {
    setTasks([...tasks, {
      id: uuid(),
      title: addNewTask,
      checked: false
    }])
  }

  const deleteTask = (taskDeleted: Task[]) => {
    setTasks(taskDeleted)
  }

  return (
    <div className="bg-gray-600 min-h-screen">
      <Header />
      <div className="max-w-3xl mx-auto -m-8">
        <Form onAddTask={addTask} />
        <TaskArea tasks={tasks} deleteTaskApp={deleteTask}/>
      </div>
    </div>

  )
}

export default App
