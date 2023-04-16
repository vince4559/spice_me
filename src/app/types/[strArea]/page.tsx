import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { CousienProps } from '../page';
import spice from '../../../../public/images/spice.webp'

interface PageProps {
    params:{
        strArea: string
    }
}

interface MealProps {
    meals: [
        {
            strMeal:string;
            strMealThumb: string;
            idMeal: string;
        }
    ]
}

const fetchTypes =async (strArea: string) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${strArea}`, {cache: "force-cache"})
    const meals:MealProps = await res.json();
    return meals.meals;
}


const StrAreaCouseins = async ({params:{strArea}}:PageProps) => {
    const meals =await fetchTypes(strArea);
  return (
    <section>
    <h3 className='text-center'>{strArea} Meals</h3>
    <div className='w-3/4 mx-auto px-2 flex flex-wrap gap-4 p-3 my-5 justify-between'>
      {meals.map(m => (
            <div key={m.idMeal} className='border-amber-400 border-2 rounded-md  mx-auto shadow-lg bg-slate-700'>                
                <Link href={`/types/${strArea}/${m.idMeal}`} className='hover:brightness-50' >
                <Image src={m.strMealThumb} width={200} height={200} alt={m.strMeal} className='shadow-lg  ' />
                 <p className='text-bold text-xl text-amber-300 text-center w-32 mx-auto p-1'>
                    {m.strMeal}
                </p>
            </Link>
            </div>
      ))}
    </div>
    </section>
  )
}

export default StrAreaCouseins

export const generateStaticParams = async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    const datas:CousienProps = await res.json();
    return datas.meals.map(area =>({
        strArea: area.strArea.toString()
    }))
}