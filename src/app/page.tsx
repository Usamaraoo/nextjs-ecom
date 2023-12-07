import { ProductCard } from '@/components/ProductCard'
import { prisma } from '@/lib/db/prisma'
import Image from 'next/image'

export default async function Home() {
  const getProducts = await prisma.product.findMany({
    orderBy:{id:'desc'}
  })
  return (
    <main className="">
      <div className='flex justify-center gap-6'>
        {getProducts && getProducts.map((product,key) =>{
             return(
              <ProductCard key={key} product={product}/>
              
            )
        } )}
      </div>
    </main>
  )
}
