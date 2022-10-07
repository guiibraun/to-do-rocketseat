import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { useState } from "react"
import { Task } from "./types/Tasks"
import { TaskArea } from "./TaskArea"

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {id: 1, title: "Esse irure nisi excepteur ex non fugiat elit consequat ea qui cillum amet.", checked: true},
    {id: 2, title: "Esse irure nisi excepteur ex non fugiat elit consequat ea qui cillum amet.", checked: true},
    {id: 3, title: "Esse irure nisi excepteur ex non fugiat elit consequat ea qui cillum amet.", checked: false},
  ])


  return (
    <div className="bg-gray-600 min-h-screen">
      <Header />
      <div className="max-w-3xl mx-auto -m-8">
        <Form />
        <TaskArea tasks={tasks}/>
      </div>
    </div>

  )
}

export default App
