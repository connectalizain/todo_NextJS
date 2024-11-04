import React from 'react'
import TodoList from './components/todoList'

const Home = () => {
  return (
   <main className='bg-gradient-to-br from-primary to-secondary h-screen flex justify-start items-center '>
     <div className='px-3 py-4 rounded-xl bg-white  max-w-screen-md w-1/2 '>
     <TodoList/>
      <div className='bg-black/80 rounded-xl mx-auto h-1.5 w-1/2'>

      </div>

     </div>
   </main>
  )
}

export default Home