import React from 'react'
import Image from 'next/image'
import { Product} from '@prisma/client'
import Link from 'next/link'

type ProductCardProp = {
    product: Product
}
export const ProductCard = ({product}:ProductCardProp) => {
    const {id,name,price,description} = product
    const isNew =Date.now() - new Date(product.createdAt).getTime() < 1000 * 60 * 60 *24 * 7
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl  overflow-hidden ">
            <Link  href={`/product`+ id}>
            <figure>
                <Image  style={{maxWidth:'100%',maxHeight:250, objectFit:"cover"}} width={500} height={500} src={product.imgaeUrl} alt="Shoes" />
            </figure>
            <div className="card-body px-2 ">
          
                <h2 className="card-title">{name}  </h2>

           
                <p>{description.length > 60 ? description.slice(0,60)+'...':description }</p>
                <div className="card-actions justify-between flex items-center">
                    <div className='flex flex-col gap-2 items-center'>
                    <p className='text-primary font-semibold text-lg '>{price} $</p>
                    {isNew && <span className=' text-xs bg-warning px-4 py-1 rounded-2xl'>new</span>}
                    </div>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </Link>
        </div>
    )
}
