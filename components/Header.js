import { HomeIcon, BadgeCheckIcon, CollectionIcon, UserIcon, SearchIcon, LightningBoltIcon } from '@heroicons/react/outline'
import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto font-semibold'>
      
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title= 'HOME' Icon={ HomeIcon } />
        <HeaderItem title= 'SEARCH' Icon={ SearchIcon } /> 
        <HeaderItem title= 'TRENDING' Icon={ LightningBoltIcon } />
        <HeaderItem title= 'COLLECTIONS' Icon={ CollectionIcon } /> 
        <HeaderItem title= 'VERIFIED' Icon={ BadgeCheckIcon } /> 
        <HeaderItem title= 'ACCOUNT' Icon={ UserIcon } /> 


 


 


      </div>

      <Image 
      className=' object-contain' 
      src="https://links.papareact.com/ua6" height={100} width={200} />
      
      
      
      </header>
  )
}

export default Header