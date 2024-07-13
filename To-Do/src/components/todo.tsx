import React from 'react'

export const Todo = () => {
  return (
    <div className='w-[60vw] h-[80vh] bg-white rounded-lg mr-auto ml-auto  border-[2px] border-slate-300'>
      <main className='grid grid-cols-[6fr_5fr] grid-rows-[59px_1fr] overflow-hidden'>
      <header className='col-[1/3] row-[1/2] bg-[#cfdafa]'></header>
      <ul></ul>

      <section className='border-l-2 border-l-black-[0.08]'></section>
      </main>
    </div>
  )
}
