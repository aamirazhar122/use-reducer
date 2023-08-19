"use client"
import Image from 'next/image'
import {useReducer} from 'react'

 function reducer(state:any, action:any){
if (action.type==="increment"){
return{
age:state.age + 1,
hight:state.hight + 2
} 
 };
 if(action.type=== 'decrement'){
 return{
age:state.age - 1,
hight: state.hight - 2
 }
};
if(action.type==="reset"){
return{
  age:state.age =0,
  hight: state.hight=10
}
 }
  };

export default function App () {
  const[state, dispatch]=useReducer(reducer,{age:0,hight:10 });

return (
    <div className=' bg-slate-600  w-full min-h-screen'>
      <div className='flex justify-around p-24 '>
      <button className='bg-blue-400 text-white rounded-lg p-2 hover:bg-blue-500 ' onClick=
      {()=>dispatch({type: "decrement"})}>Decrement</button>
      
      <button className='bg-blue-400 rounded-lg  text-white p-2 hover:bg-blue-500 ' onClick=
      {()=>{dispatch({type:"increment"})}}>Increment</button> 
     </div>
     
     <div className='flex items-center justify-center '>

    <button className='bg-red-600 rounded-lg p-2  text-white hover:bg-red-700 ' onClick=
      {()=>dispatch({type:"reset"})} >Reset</button>
      </div>
     <div className='flex flex-col items-center  
     justify-center text-sky-300 font-semibold mt-10'>
      <p className='hover:underline'>Hello! your age {state?.age}</p>
        <p className='hover:underline'>Hello! your hight {state?.hight}</p>
     </div>
      </div>
      
  )
};
 