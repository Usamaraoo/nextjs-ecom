
export default function TextAreaField({label,placeholder,name ,required,inputType,row}) {
    return (
        <label className="form-control  block w-full">
            <span className="label-text text-start mb-2 block">{label}</span>
            <textarea   type={inputType} placeholder={placeholder} name={name}  className="textarea textarea-bordered min-w-full" required={required}  rows={row}/>
        </label>
    )
}
