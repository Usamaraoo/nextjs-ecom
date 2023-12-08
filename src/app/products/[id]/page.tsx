import { prisma } from "@/lib/db/prisma"
import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { cache } from "react"

interface ProductPageProps {
    params:{
        id:string
    }
}

const getProducts = cache(async (id:string)=>{
    const productDetail = await prisma.product.findUnique({where: {id}})
    if(!productDetail) notFound()
    return productDetail
})

export async function generateMetadata({params:{id}}:ProductPageProps ):Promise <Metadata>{
    const productDetail = await getProducts(id);
    return {
        title:productDetail.name + "- Flowmazon Product",
        description :productDetail.description,
        openGraph :{
            images:[{url:productDetail.imgaeUrl}],
        },
    }
}

export default async function ProductPage({params:{id}}:ProductPageProps ){
    const productDetail = await getProducts(id);
  
    return(
<div className="flex flex-col lg:flex-row gap-6">
<Image src={productDetail.imgaeUrl} width={500} height={500} alt={productDetail.name} className="rounded-lg max-h-"  priority/>
<div>
    <h1 className="text-4xl font-bold leading-normal">{productDetail.name}</h1>
    <p className="text-primary font-semibold">{productDetail.price} $</p>
    <p className="leading-9 mt-4">{productDetail.description}</p>
</div>
</div>
)


}