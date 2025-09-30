import React, { useState } from 'react'
import { Button } from './ui/button'
import { Dropdown } from './Dropdown'
import SheetDemo from './SheetDemo'
import { SheetTrigger } from './ui/sheet'
import { useDispatch } from 'react-redux'
import { resetAllWidgets } from '@/features/categories/categoriesSlice'

const AddWidget = () => {
  const [showAddWidget,setShowAddWidget] = useState(true);
  const dispatch = useDispatch();
  return (
    <div className='flex flex-row gap-2 items-center'>
      <SheetDemo>
      <Button className="bg-white text-slate-500 text-[12px] h-6 rounded-[3px]  hover:bg-white w-[92px]" onClick={()=>setShowAddWidget(true)}>
        <span className='pl-1'>Add Widget</span>
        <span className='pr-0.5'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        </span>
      </Button>
      </SheetDemo>
      
      <Button className="bg-white  text-slate-500 h-6 text-[10px] rounded-[3px] w-[10px] hover:bg-white"
      onClick={()=>dispatch(resetAllWidgets())}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      </Button>
      <div className='pr-2'>
        <Dropdown />
      </div>
      <div className='flex flex-rows items-center
      text-[10px]
      rounded-[3px] 
      mr-3
      text-purple-900
      bg-white
      outline-1 outline-purple-900'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-purple-900">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
        </svg>
        |
        <select name="selectTime" id="timeSelector"
          className=' h-6 w-[50px]'>
          <option value="2 days">2 days</option>
          <option value="5 days">5 days</option>
          <option value="7 days">7 days</option>
        </select>
      </div>

    </div>
  )
}

export default AddWidget