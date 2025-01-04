import React from 'react'

interface Props{
    onclick:()=>void,
    children:string;
}

const Button = ({onclick,children}:Props) => {
  return
  <>
  <button onClick={onclick}>{children}</button>
  
  </>
}

export default Button