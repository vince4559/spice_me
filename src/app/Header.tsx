"use client"

import Link from 'next/link'
import React from 'react'
import {usePathname} from 'next/navigation'

const Header = () => {
  const pathname = usePathname().split("/");
  const currentArea = pathname[2];
  const recipeId = pathname[3]

  return (
    <div className=' flex justify-between items-center p-5 text-white bg-amber-950' >
      <Link href={'/'} className='link text-3xl font-semibold'>
        Spice_City
      </Link>

      <div className='underline underline-offset-4 hover:scale-105'>
        {pathname && currentArea && 
        (<Link className='text-xl' href={recipeId? `/types/${currentArea}`: "/types"}>
          Back to {recipeId? `${currentArea} recipes` : 'recipe types'}
        </Link>)}
      </div>
    </div>
  )
}

export default Header
