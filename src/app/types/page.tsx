import Link from 'next/link';
import React from 'react'
import spice from '../../../public/images/spice.webp'
import Image from 'next/image';

export interface CousienProps {
    meals:[
        {strArea: string}
    ]
}

const fetchCousines = async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list", {cache:'force-cache'});
    const datas:CousienProps = await res.json();
    return datas.meals
}

const Types =async () => {
    const meals= await fetchCousines(); 
  return (
    <section>
         <div className=" -z-0 fixed w-full h-full bg-black  mix-blend-color-darken opacity-60">
            <Image 
              alt="hero img"
              src={spice}
              objectFit="cover"
              layout="fill"
            />
          </div>
        <div className='container flex justify-between flex-wrap gap-3 mt-3 
        px-7 '>
            {meals.map((a,index) => 
            <Link key={index} href={`/types/${a.strArea}`} className='btn-Link'>
                {a.strArea}
            </Link>)}
        </div>
    </section>
  )
}

export default Types
