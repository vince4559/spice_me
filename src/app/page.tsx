import Link from "next/link";
import food from '../.././public/images/food.webp'
import Image from "next/image";

export default function Home() {
  return (
    <main >
       <div >
          <div className=" -z-0 fixed w-full h-full bg-black  mix-blend-color-darken">
            <Image 
              alt="hero img"
              src={food}
              objectFit="cover"
              layout="fill"
              className="opacity-90"
            />
          </div>
          <div className="w-full absolute top-1/3   text-center">
            <h1 className="bg-slate-50 opacity-50 w-fit mx-auto p-3">
              Explore food from around the world
            </h1>
            <Link href={'/types'} className="btn-Link text-2xl">
              List Of Cusines
            </Link>
          </div>
       </div>
    </main>
  )
}
