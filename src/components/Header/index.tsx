import todoLogo from '../../assets/todo-logo.svg'

export const Header = () => {
    return (
        <div className="h-200 bg-gray-700 flex justify-center items-center">
            <img src={todoLogo} alt="Logo Todo" />
        </div> 
    )
}