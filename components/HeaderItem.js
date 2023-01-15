import React from 'react'

function HeaderItem({ Icon, title }) {
  return (
    <div className='flex flex-col cursor-pointer items-center hover:text-white group w-12 sm:w-20'>
        <Icon className="h-8 mb-1 group-hover:animate-bounce" />
        <p className='sm:opacity-0 lg:opacity-5 group-hover:opacity-100 tracking-widest' >{title}</p>

        
    </div>
  )
}

export default HeaderItem