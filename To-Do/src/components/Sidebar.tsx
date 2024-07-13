import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='w-56 bg-blue-800 h-[100vh] p-2'>
        <ul className='flex flex-col gap-2 p-2 m-2'>
             <Link to='/home'>Home</Link>
             <Link to='/MyTasks'>Tasks</Link>
        </ul>
    </div>
  )
}
