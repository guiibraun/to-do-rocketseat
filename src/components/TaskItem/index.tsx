import { Trash } from "phosphor-react"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Task } from "../../types/Tasks"

interface TaskProps {
    task: Task,
    completedTask: (checked: boolean, id:string) => void
    deleteTask: (id: string, checked: boolean) => void
}

export const TaskItem = ({ task, completedTask, deleteTask }: TaskProps) => {
    const [isChecked, setIsChecked] = useState(task.checked)

    const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(state => state = e.target.checked)
        completedTask(e.target.checked, task.id)
    }
    
    const handleDeleteTask = () => {
        deleteTask(task.id, isChecked)
    }

    return (
        <div className="flex items-center justify-between bg-gray-500 rounded-lg border-2 border-gray-500">
            <div className="w-11/12">
                <label className="flex gap-2 text-gray-100 p-8 cursor-pointer">
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