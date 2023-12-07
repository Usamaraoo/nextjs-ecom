"use client"

export default function  ButtonElem  ({name,type='submit',classes='bg-primary',onclick=()=> ''})  {
  return (
    <button className={`px-4 py-2 rounded-md ${classes}`} type={type} onClick={onclick}>{name}</button>

  )
}
