import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

interface TaskProps {
    onAddTask: (newTaskInput: string) => void
}

export const Form = ({onAddTask}: TaskProps) => {
    const [addTask, setAddTask] = useState('')
    
    const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onAddTask(addTask)
    }

    const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTask(e.target.value)
    }

    return (
        <div>
            <form className='flex gap-2' onSubmit={handleAddTask}>
                <input 
                    type="text"
                    required
                    onChange={handleTaskChange}
                    placeholder="Adicione uma nova tarefa" 
                    name="task" 
                    className='p-4 rounded-lg bg-gray-500 w-full text-gray-300 focus:text-gray-100 focus:outline-0 focus:border-2 focus:border-purple-dark'
                />
                <button
                    className='bg-blue-dark hover:bg-blue transition-all w-20 flex justify-center items-center p-4 rounded-lg box-content gap-2 text-white'
                >
                    Criar
                    <PlusCircle size={28} />
                </button>
            </form>
        </div>
    )
}