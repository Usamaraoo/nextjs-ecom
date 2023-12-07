"use client"
import { ComponentProps } from 'react'
import { useFormStatus } from 'react-dom'

type FormSubmissionButtonProps = {
  children: React.ReactNode,
  classNmae?: String,
} & ComponentProps<"button">

const SubmitButton = (
  { children, className, ...props }: FormSubmissionButtonProps

) => {
  const { pending } = useFormStatus()
  return (
    <button {...props} disabled={pending} className={`px-4 py-2 rounded-md bg-primary`} type='submit' >{!pending ? children :
      <span className="loading loading-spinner loading-md"></span>}

    </button>

  )
}
export default SubmitButton