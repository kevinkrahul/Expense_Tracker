import { useState } from 'react'
import ExpenseList from './components/ExpenseList'
import ExpenseFilter from './components/ExpenseFilter'
import ExpenseForm from './components/ExpenseForm';


const App = () => {

  const [selectedCategory,setselectedCategory]=useState('');

  const [expenses,setexpenses]=useState([
    {id:1,description:'A',amount:10,category:'Utilities'},
    {id:2,description:'B',amount:10,category:'Utilities'},
    {id:3,description:'C',amount:10,category:'Utilities'},
    {id:4,description:'D',amount:10,category:'Utilities'},
    {id:5,description:'Movie',amount:40,category:'Entertainment'}
  ]);

  const visibleExpenses=selectedCategory
  ?expenses.filter((e)=>e.category===selectedCategory)
  :expenses;

  return <>
  <div className="mb-3">
  <ExpenseForm onSubmit={(data)=>(setexpenses([...expenses,{...data,id:expenses.length+1}]))} />
  </div>
  <div className="mb-3">
  <ExpenseFilter onSelectCategory={category => (setselectedCategory(category))} />
  </div>
  <ExpenseList  expenses={visibleExpenses} onDelete={(id)=>setexpenses(expenses.filter(e=>e.id !== id))} />
  </>
}

export default App