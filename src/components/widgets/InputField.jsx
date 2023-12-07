
export default function InputField({label,placeholder,name ,required,inputType,}) {
    return (
        <label className=" block w-full ">
            <span className="label-text text-start mb-2 block">{label}</span>
            <input  type={inputType} placeholder={placeholder} name={name}  className="input input-bordered min-w-full " required={required} />
        </label>
    )
}
