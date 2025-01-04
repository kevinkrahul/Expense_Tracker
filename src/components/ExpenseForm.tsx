import categories from '../categories'
import {z} from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js';

const schema=z.object({
description:z.string().min(3, {message:'Description length should be minimum 3 letters '}).max(50),
amount:z.number({invalid_type_error:'Please enter an amount in Number'}).min(0.01).max(100000),
category:z.enum(categories,{
    errorMap:()=>({message:'Choose anyone of the category'})
})
});

type Formdata=z.infer<typeof schema>

interface Props{
    onSubmit:(data:Formdata)=>void
}

const ExpenseForm = ({onSubmit}:Props) => {

    const {register,reset,handleSubmit,formState:{errors}}=useForm<Formdata>({resolver:zodResolver(schema)});

  return (
  <>
  <form onSubmit={handleSubmit(data=>{
    onSubmit(data);
    reset();  //here whenever the submit hits it's also reset anyway
    })}>
    <div className="mb-3">
        <label htmlFor="desciption" className="form-label">
            Description
        </label>
        <input {...register('description')} id="description" type="text" className="form-control" />
        {errors.description && <p className='text-danger'>{errors.description.message}</p>}
    </div>
    <div className="mb-3">
        <label htmlFor="amount" className="form-label">
            Amount
        </label>
        <input {...register('amount',{valueAsNumber:true})} id='amount' type="number" className="form-control" />
        {errors.amount && <p className='text-danger'>{errors.amount.message}</p>}
    </div>
    <div className="mb-3">
        <label htmlFor="category" className="form-label">
        Category
        </label>
        <select {...register('category')} id="category" className="form-select">
            <option value=""></option>
            {categories.map(cat=> 
                <option key={cat} value={cat}>
                    {cat}
                </option>
            )}
        </select>
        {errors.category && <p className='text-danger'>{errors.category.message}</p>}
    </div>
    <button className="btn btn-primary">
        Submit
    </button>
  </form>
  </>
)}

export default ExpenseForm