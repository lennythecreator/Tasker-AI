import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import {Home} from './pages/Home'
import { Calendar } from './pages/Myschedule'
import { Todo } from './components/todo'

function App() {

  return (
    <>
      <BrowserRouter>
       <div className='flex'>
          <Sidebar/>
          <div className='flex flex-col m-3 justify-center items-center mr-auto ml-auto'>
            <Routes>
              <Route path={'/home'} element={<Home/>}/>
              <Route path={'/MyTasks'} element={<Todo/>}/>
              <Route path={'/Calendar'} element={<Calendar/>}/>
            </Routes>
          </div>
          
       </div>
      </BrowserRouter>
      
    </>
  )
}

export default App
