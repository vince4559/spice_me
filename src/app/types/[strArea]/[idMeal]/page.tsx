import React from 'react'
import { RecipesProps } from '../../../../../typings';
import Image from 'next/image';
import Link from 'next/link';

interface ParamsProps {
    params: {
        idMeal: string;
    }
}

const fetchDetails =async (idMeal:string) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,{cache: 'force-cache'})
    const details:RecipesProps = await res.json()
    return details
}

const MealDetails =async ({params:{idMeal}}:ParamsProps) => {
    const recipee = await fetchDetails(idMeal);
    const details:any = recipee.meals[0];
    
    const ingredients = Object.keys(details)
    .filter((key) => key.indexOf('Ingredient') > 0)
    .map((ing:string)=> details[ing]);

    const measures = Object.keys(details)
    .filter((key) => key.indexOf('Measure') > 0)
    .map((measure:string)=> details[measure]);

   

  return (
   <section className='container w-screen mx-auto  p-3'>
        <div key={details.idMeal} className='md:flex justify-between  gap-3'>
            <div className='flex-none w-full  md:w-1/3'>
                <h2><span>Recipe name: </span>{details.strMeal}</h2>
                <h3><span>Category: </span>{details.strCategory}</h3>
                <Image alt={details.idMeal} src={details.strMealThumb} width={500} height={500} />
                {details.strTags && 
                ( <h3 className='p-1 w-24'><span>Subtag: </span>{details.strTags}</h3>)}
               <Link className='btn-Link' href={details.strYoutube} target='_blank'>Link to youtube video</Link>
            </div>
            <div className='flex-1 w-full md:w-2/3 p-3 mt-10'>
                <div className="flex justify-evenly gap-4">
                    <div>
                        <span>Ingredients</span>
                        <ul>                        
                            {ingredients.map((i, index) => <li key={index}>{i}</li>)}
                        </ul>
                    </div>
                    <div>
                        <span>Measurements</span>
                        <ul>                            
                            {measures.map((i, index) => <li key={index}>{i}</li>)}
                        </ul>
                    </div>
                </div>
                <p><span>Instruction: <br/> </span>
                     {details.strInstructions}
                </p>
            </div>
        </div>
   </section>
  )
}

export default MealDetails
