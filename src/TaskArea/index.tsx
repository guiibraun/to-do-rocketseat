import { TaskItem } from "../TaskItem"
import emptyIcon from '../assets/empty.svg'
import { Task } from "../types/Tasks"
import { useEffect, useState } from "react"

interface TaskProps {
    tasks: Task[]
}

export const TaskArea = ({ tasks }: TaskProps) => {
    const [completedTasks, setCompletedTasks] = useState(0)
    const [createdTasks, setCreatedTasks] = useState(tasks.length)

    function onCompletedTask (completed: number) {
        let newCompletedTasks = 0
        if(completed) {
            newCompletedTasks = completedTasks + 1
            setCompletedTasks(newCompletedTasks)
        } else {
            completedTasks <= 0 ? newCompletedTasks = 0 : newCompletedTasks = completedTasks - 1
            setCompletedTasks(newCompletedTasks)
        }
    }

    return (
        <>
            <div className="flex justify-between mt-16 mb-8 font-bold text-sm">
                <div className="text-purple">Tarefas Criadas <span className="bg-gray-400 text-gray-100 text-xs py-1 px-2 rounded-3xl">{createdTasks}</span></div>
                <div className="text-blue">Concluídas <span className="bg-gray-400 text-gray-100 text-xs py-1 px-2 rounded-3xl">{completedTasks} de {createdTasks}</span></div>
            </div>

            <form className="flex flex-col gap-y-2 mt-8">
                {tasks.length > 0 &&
                    <>
                        {tasks.map(task => (
                            <TaskItem key={task.id} task={task} completedTask={onCompletedTask}/>
                        ))}
                    </>
                }
            </form>
            {tasks.length <= 0 &&
                <div className="border-t-2 border-gray-400">
                    <div className="flex flex-col justify-start items-center py-16 w-full text-gray-300">
                        <img src={emptyIcon} alt="Icone Vazio" />
                        <h3 className="font-bold text-base mt-4">Você ainda não tem tarefas cadastradas</h3>
                        <h4>Crie tarefas e organize seus itens a fazer</h4>
                    </div>
                </div>
            }
        </>
    )
}