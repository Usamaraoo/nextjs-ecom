import TextAreaField from '../../components/widgets/TextAreaField'
import InputField from '../../components/widgets/InputField'
import ButtonElem from '../../components/widgets/ButtonElem'
import { prisma } from '@/lib/db/prisma'
import { redirect } from 'next/navigation'
import SubmitButton from '../../components/SubmitButton'

async function addProductServer(FormData: FormData) {
    "use server"
    console.log('check',FormData)
    const name = FormData.get("name")?.toString() || ''
    const description = FormData.get("description")?.toString() || ''
    const imgaeUrl = FormData.get("imgurl")?.toString() || ''
    const price = Number(FormData.get("price")?.toString() || 0) 
    // if (!name || !description || !imgaeUrl || !price) {
    //     throw Error("Missing required field")
    // }
    await prisma.product.create({
        data: { name, description, imgaeUrl, price }
    })
    // redirect('/')
}


export default function addProduct() {
    return (
        <div className="">
            <h1 className="font-bold text-center my-10 text-2xl ">Add Product</h1>
            <form action={addProductServer} className='grid grid-cols-2  gap-8 w-7/12  mx-auto'>
                <div >
                    <InputField inputType={'text'} label={'Name'} name={'name'} placeholder='Add title here' required={true} />
                </div>
                <div >
                    <InputField inputType={'number'} label={'Price'} name={'Price'} placeholder='$$' required={true} />
                </div>
                <div >
                    <TextAreaField inputType={'text'} label={'Description'} name={'description'} placeholder='Minimum 40 words' required={true} row={4} />
                </div>
                <div >
                    <InputField inputType={'text'} label={'Image Url'} name={'imgurl'} placeholder='Add image url here' required={true} />
                </div>
                {/* <ButtonElem name='Add' type='submit' classes={'bg-primary'} /> */}
                <SubmitButton className='bg-primary'>Add </SubmitButton>
            </form>

        </div>
    )
}