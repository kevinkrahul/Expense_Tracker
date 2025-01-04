import React from 'react'
import categories from '../categories';

interface Props{
    onSelectCategory:(cat:string)=>void;
}

const ExpenseFilter = ({onSelectCategory}:Props) => {
  return (
    <>
    <select className="form-select" onChange={(event)=>onSelectCategory(event.target.value)}>
        <option value="">All Categories</option>
        {categories.map((cat)=> 
        <option key={cat} value={cat}>
            {cat}
        </option> )}
    </select>
    </>
  )
}

export default ExpenseFilter