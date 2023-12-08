import { ProductCard } from '@/components/ProductCard'
import { prisma } from '@/lib/db/prisma'
import Hero from "@/components/Hero"

export default async function Home() {
  const getProducts = await prisma.product.findMany({
    orderBy:{id:'desc'}
  })
    console.log
  return (
    <main className="">
      <div className='flex justify-center gap-6 flex-wrap'>
        <Hero src={getProducts[0].imgaeUrl} alt={getProducts[0].name} />
        {getProducts && getProducts.slice(1,).map((product,key) =>{
             return(
              <ProductCard key={key} product={product}/>
              
            )
        } )}
      </div>
    </main>
  )
}
