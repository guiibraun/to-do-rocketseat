import { Trash } from "phosphor-react"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Task } from "../../types/Tasks"

interface TaskProps {
    task: Task,
    completedTask: (completedTask: boolean) => void
    deleteTask: (id: string) => void
}

export const TaskItem = ({ task, completedTask, deleteTask }: TaskProps) => {
    const [isChecked, setIsChecked] = useState(task.checked)

    useEffect(() => {
        completedTask(isChecked)
    }, [isChecked])

    const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked)
    }


    const handleDeleteTask = () => {
        deleteTask(task.id)

    }

    return (
        <div className="flex items-center justify-between bg-gray-500 rounded-lg border-2 border-gray-500">
            <div className="w-11/12">
                <label className="flex gap-2 text-gray-100 p-8 cursor-pointer ">
                    <input
                        type="checkbox"
                        className="accent-purple"
                        onChange={handleCheckbox}
                        checked={isChecked}
                    />
                    <span className={isChecked ? 'line-through text-gray-300' : 'text-gray-100'}>{task.title}</span>
                </label>
            </div>
            <button type="button" className="flex-1 flex justify-center text-gray-300 hover:text-danger" title="delete" onClick={handleDeleteTask}><Trash size={25} /></button>
        </div>

    )
}