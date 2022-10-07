import { Trash } from "phosphor-react"
import { ChangeEvent, useEffect, useState } from "react"
import { Task } from "../types/Tasks"

interface TaskProps {
    task: Task,
    completedTask: (completedTask: boolean) => void
}


export const TaskItem = ({ task, completedTask }: TaskProps) => {
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        setIsChecked(task.checked)
    }, [])

    useEffect(() => {
        completedTask(isChecked)
    }, [isChecked])
    
    const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        isChecked ? setIsChecked(false) : setIsChecked(true)
        
    }

    return (
        <div className="flex items-center justify-between bg-gray-500 rounded-lg border-2 border-gray-500">
            <div className="w-11/12">
                <label className="flex gap-2 text-gray-100 p-8 cursor-pointer ">
                    <input
                        type="checkbox"
                        className=" accent-purple"
                        onChange={handleCheckbox}
                        checked={isChecked}
                    />
                    <span className={isChecked ? 'line-through text-gray-300' : 'text-gray-100'}>{task.title}</span>
                </label>
            </div>
            <button className="flex-1 flex justify-center text-gray-300 hover:text-danger" title="delete"><Trash size={25}/></button>
        </div>

    )
}