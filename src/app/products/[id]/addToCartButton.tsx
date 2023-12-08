"use client"
import { MdShoppingCart } from "react-icons/md";

interface AddToCartButtonProps {
    productId:string
}

 const AddToCartButton = ({productId}:AddToCartButtonProps) => {
  return (
    <div className="flex items-center gap-2">
      <button className="btn btn-primary" onClick={()=>''}><MdShoppingCart /> Add</button>
    </div>
  )
}
export default AddToCartButton