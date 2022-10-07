import { PlusCircle } from 'phosphor-react'

export const Form = () => {
    return (
        <div>
            <form className='flex gap-2'>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa" 
                    name="task" 
                    className='p-4 rounded-lg bg-gray-500 w-full text-gray-300 focus:text-gray-100 focus:outline-0 focus:border-2 focus:border-purple-dark'
                />
                <button 
                    type="submit" 
                    className='bg-blue-dark hover:bg-blue transition-all w-20 flex justify-center items-center p-4 rounded-lg box-content gap-2 text-white'
                >
                    Criar
                    <PlusCircle size={28} />
                </button>
            </form>
        </div>
    )
}